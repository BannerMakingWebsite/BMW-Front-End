import { useState } from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
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
  const queryClient = new QueryClient();
  return (
    <>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
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
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
