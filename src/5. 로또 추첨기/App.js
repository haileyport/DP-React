import "./App.css";
import { useState, useRef } from "react";

function Lotto() {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <div className="App-header">
        <h1>오늘의 행운 번호</h1>
      </div>
      <div>로또를 추첨 중입니다.</div>
    </div>
  );
}

export default Lotto;
