import { useState } from "react";
import Home from "./home/home";
import WhatAreWeMrWhite from "./what/what";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="main">
        <Home />{" "}
      </div>

      <div className="info">
        <WhatAreWeMrWhite />
      </div>
    </>
  );
}

export default App;
