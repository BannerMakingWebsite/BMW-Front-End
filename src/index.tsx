import { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Modal from "./components/Modal";
import ModalContentsLogin from "./components/Modal/Login";
import { GlobalStyle } from "./styles/globalStyle";
import theme from "./styles/theme";

function App() {
  const [modalState, setModalState] = useState<JSX.Element>(
    <ModalContentsLogin />
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {modalState && <Modal title="이미지 크기 변경" contents={modalState} />}
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div>hello world</div>
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
