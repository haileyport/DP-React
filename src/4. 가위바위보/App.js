import "./App.css";
import { useState, useRef } from "react";

function RockPaperScissors() {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1>가위바위보!</h1>
      </div>
      <div></div>
    </div>
  );
}

export default RockPaperScissors;
