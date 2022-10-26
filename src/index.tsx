import { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Background from "./components/Background";
import Header from "./components/Header";
import Modal from "./components/Modal";
import ModalContentsLogin from "./components/Modal/Login";
import Sidebar from "./components/Sidebar";
import { GlobalStyle } from "./styles/globalStyle";
import theme from "./styles/theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Background>
          <BrowserRouter>
            <Routes>
              <Route
                path="*"
                element={
                  <>
                    <Header />
                    <Sidebar />
                  </>
                }
              />
            </Routes>
          </BrowserRouter>
        </Background>
      </ThemeProvider>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
