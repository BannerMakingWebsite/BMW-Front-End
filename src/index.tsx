import { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Background from "./components/Background";
import EditFigureTab from "./components/Sidebar/EditFigureTab";
import EditTextTab from "./components/Sidebar/EditTextTab";
import Header from "./components/Header";
import Modal from "./components/Modal";
import ModalContentsLogin from "./components/Modal/Login";
import Sidebar from "./components/Sidebar";
import { GlobalStyle } from "./styles/globalStyle";
import theme from "./styles/theme";
import SettingTab from "./components/Sidebar/Setting";
import { QueryClientProvider, QueryClient } from "react-query";
import { RecoilRoot } from "recoil";
import Board from "./components/board";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <BrowserRouter>
            <Background>
              <Header />
              <Sidebar />
              <Board width={1920} height={1080} />
              <Routes>
                <Route element={<></>} />
                <Route path="/setting" element={<SettingTab />} />
                <Route path="/edit/figure" element={<EditFigureTab />} />
                <Route path="/edit/text" element={<EditTextTab />} />
              </Routes>
            </Background>
          </BrowserRouter>
        </ThemeProvider>
      </RecoilRoot>
    </QueryClientProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
