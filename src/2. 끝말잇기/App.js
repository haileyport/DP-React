import "./App.css";
import { useState } from "react";

function Word() {
  const [word, setWord] = useState("바다");
  const [input, setInput] = useState("");
  const [fail, setFail] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === input[0]) {
      setWord(input);
      setFail("");
    } else {
      setFail("틀렸습니다!");
    }
  };

  return (
    <div className="App">
      <head className="App-header">
        <h1>끝말잇기 존에 어서오세요.</h1>
      </head>
      <div>
        <div>{word}</div>
        <form>
          <input type="text" value={input} onChange={onChange}></input>
          <button onClick={onSubmit}>입력</button>
        </form>
        <div>{fail}</div>
      </div>
    </div>
  );
}

export default Word;
