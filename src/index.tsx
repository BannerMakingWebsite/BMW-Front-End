import ReactDOM from "react-dom";
import { GlobalStyle } from "./globalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <div>hello world</div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
