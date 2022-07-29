import "./App.css";
import { useState } from "react";

function App() {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setResult(Number(input) === first * second ? "성공!" : "실패...");
    setFirst(Math.ceil(Math.random() * 9));
    setSecond(Math.ceil(Math.random() * 9));
  };

  return (
    <div className="App">
      <head className="App-header">
        <h1>멋진 구구단</h1>
      </head>
      <div>
        <div>
          {first} 곱하기 {second}는?
        </div>
        <form>
          <input type="number" value={input} onChange={onChange}></input>
          <button onClick={onSubmit}>입력</button>
        </form>
        <div>{result}</div>
      </div>
    </div>
  );
}

export default App;
