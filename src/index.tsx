import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./globalStyle";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
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
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
