import React, { useState } from "react";
import Keypad from "./Keypad";
import "./App.css";

function App() {
  let [input, setInput] = useState("");

  function HandleClick(value) {
    setInput(input + value);
  }

  function Calculate() {
    try {
      let outputVal = eval(input);
      setInput(String(outputVal));
    } catch (e) {
      setInput("Error");
    }
  }

  function HandleClear() {
    setInput("");
  }

  return (
    <div className="container">
      <h1>Calculator App Using React</h1>
      <div className="Calculator">
        <input type="text" value={input} className="output" readOnly />
        <Keypad HandleClick={HandleClick} Calculate={Calculate} HandleClear={HandleClear} />
      </div>
    </div>
  );
}

export default App;
