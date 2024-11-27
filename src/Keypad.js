import React from "react";

function Keypad({ HandleClick, Calculate, HandleClear }) {
  return (
    <div className="keypad">
      <div className="row">
        <button className="digit" onClick={() => HandleClick("7")}>7</button>
        <button className="digit" onClick={() => HandleClick("8")}>8</button>
        <button className="digit" onClick={() => HandleClick("9")}>9</button>
        <button className="operator" onClick={() => HandleClick("/")}>/</button>
      </div>

      <div className="row">
        <button className="digit" onClick={() => HandleClick("4")}>4</button>
        <button className="digit" onClick={() => HandleClick("5")}>5</button>
        <button className="digit" onClick={() => HandleClick("6")}>6</button>
        <button className="operator" onClick={() => HandleClick("*")}>*</button>
      </div>

      <div className="row">
        <button className="digit" onClick={() => HandleClick("1")}>1</button>
        <button className="digit" onClick={() => HandleClick("2")}>2</button>
        <button className="digit" onClick={() => HandleClick("3")}>3</button>
        <button className="operator" onClick={() => HandleClick("-")}>-</button>
      </div>

      <div className="row">
        <button className="digit" onClick={() => HandleClick("0")}>0</button>
        <button className="fun-key" onClick={Calculate}>=</button>
        <button className="fun-key" onClick={HandleClear}>C</button>
        <button className="operator" onClick={() => HandleClick("+")}>+</button>
      </div>
    </div>
  );
}

export default Keypad;
