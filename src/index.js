import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Password from "../src/password/password";

function App() {
  return (
    <div className="App">
      <Password />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
