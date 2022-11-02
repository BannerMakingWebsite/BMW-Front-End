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

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Background>
          <BrowserRouter>
            <Header />
            <Sidebar />
            <Routes>
              <Route path="*" element={<></>} />
              <Route path="/setting" element={<SettingTab />} />
              <Route path="/edit/figure" element={<EditFigureTab />} />
              <Route path="/edit/text" element={<EditTextTab />} />
            </Routes>
          </BrowserRouter>
        </Background>
      </ThemeProvider>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
