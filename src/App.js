import React from "react";
import Keypad from "./Keypad";
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Calculator App Using React</h1>
      <div className="Calculator">
        <input type="text" className="output" />
        <Keypad />
      </div>
    </div>
  );
}

export default App;
