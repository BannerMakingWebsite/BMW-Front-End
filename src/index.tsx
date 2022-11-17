import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Background from "./components/Background";
import EditFigureTab from "./components/Sidebar/EditFigureTab";
import EditTextTab from "./components/Sidebar/EditTextTab";
import Header from "./components/header";
import Sidebar from "./components/Sidebar";
import { GlobalStyle } from "./styles/globalStyle";
import theme from "./styles/theme";
import { QueryClientProvider, QueryClient } from "react-query";
import { RecoilRoot, useRecoilState } from "recoil";
import Board from "./components/board";
import SettingTab from "./components/Sidebar/settingTab";
import MyPageTab from "./components/Sidebar/myPageTab";
import FigureTab from "./components/Sidebar/figureTab";
import ImageTab from "./components/Sidebar/imageTab";
import TemplateTab from "./components/Sidebar/templateTab";
import LoginTab from "./components/Sidebar/loginTab";
import Modal from "./components/Modal";
import { modalStateAtom } from "./atoms/modalState";
import ElementListState, {
  AutoSaveState,
  BoardSizeState,
} from "./atoms/elementState";
import { useEffect, useState } from "react";

function App() {
  const queryClient = new QueryClient();
  const [modalState, setModalState] = useRecoilState(modalStateAtom);
  const [size, setSize] = useRecoilState(BoardSizeState);
  const [saveTime, setTime] = useRecoilState(AutoSaveState);
  const [clearid, setId] = useState<NodeJS.Timer>();
  const [elementList, setElementList] = useRecoilState(ElementListState);
  const beforeUnloadListener = (event: BeforeUnloadEvent) => {
    event.preventDefault();
    return (event.returnValue = "Are you sure you want to exit?");
  };

  useEffect(() => {
    const data = window.localStorage.getItem("BMW-element-data");
    const boardsize = window.localStorage.getItem("BMW-board-size");
    const autosaveTerm = window.localStorage.getItem("BMW-autosave-term");
    if (JSON.parse(autosaveTerm)) {
      setTime(JSON.parse(autosaveTerm));
    }
    setSize(JSON.parse(boardsize));
    if (data) {
      setElementList(JSON.parse(data));
    }

    addEventListener("beforeunload", beforeUnloadListener, { capture: true });
    return () => {
      removeEventListener("beforeunload", beforeUnloadListener, {
        capture: true,
      });
    };
  }, []);

  const list = elementList;

  const saveData = () => {
    if (elementList) {
      window.localStorage.setItem(
        "BMW-element-data",
        JSON.stringify(elementList)
      );
      window.localStorage.setItem("BMW-board-size", JSON.stringify(size));
      window.localStorage.setItem(
        "BMW-autosave-term",
        JSON.stringify(saveTime)
      );
    }
  };

  useEffect(() => {
    clearInterval(clearid);
    const AutoSave = setInterval(() => {
      saveData();
    }, saveTime * 60000);
    setId(AutoSave);
  }, [saveTime, elementList, size]);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {modalState.title !== "" && (
          <Modal title={modalState.title} children={modalState.modalContents} />
        )}
        <BrowserRouter>
          <Background>
            <Header />
            <Sidebar />
            <Board width={size.width} height={size.height} />
            <Routes>
              <Route element={<></>} />
              <Route path="/template" element={<TemplateTab />} />
              <Route path="/image" element={<ImageTab />} />
              <Route path="/figure" element={<FigureTab />} />
              <Route path="/account" element={<MyPageTab />} />
              <Route path="/login" element={<LoginTab />} />
              <Route path="/setting" element={<SettingTab />} />
              <Route path="/edit/figure" element={<EditFigureTab />} />
              <Route path="/edit/text" element={<EditTextTab />} />
            </Routes>
          </Background>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

ReactDOM.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  document.getElementById("root")
);
