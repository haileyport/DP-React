import "./App.css";
import { useState, useRef, useEffect, useCallback } from "react";

function RockPaperScissors() {
  const scores = {
    "✊": 1,
    "✋": 0,
    "✌️": -1,
  };

  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);
  const [computer, setComputer] = useState("✊");
  const [user, setUser] = useState("🤘");
  const [btnDisabled, setBtnDisabled] = useState(false);
  const interval = useRef(null);
  //useRef는 리랜더링 X, 컴포넌트 속성만 조회/수정
  //focus가 필요할 때, 초기화가 필요할 때, 변수 관리가 필요할 때 사용

  const randomTimer = useCallback(() => {
    //가위바위보를 계속 루프
    if (computer === "✊") {
      setComputer("✋");
    } else if (computer === "✋") {
      setComputer("✌️");
    } else if (computer === "✌️") {
      setComputer("✊");
    }
  }, [computer]);

  const onClickBtn = (user) => () => {
    setUser(user);
    setBtnDisabled(true);
    clearInterval(interval.current);
    const diff = scores[user] - scores[computer];
    console.log(scores[computer]);
    if (diff === 0) {
      setResult("비겼어요!");
    } else if ([-1, 2].includes(diff)) {
      setResult("이겼어요🎉");
      setScore((prev) => prev + 1);
    } else {
      setResult("졌어요😭");
      setScore((prev) => prev - 1);
    }
    setTimeout(() => {
      interval.current = setInterval(randomTimer, 200);
      setBtnDisabled(false);
    }, 1000);
  };

  useEffect(() => {
    interval.current = setInterval(randomTimer, 100);
    return () => {
      clearInterval(interval.current);
    };
  }, [randomTimer]); //가위바위보 바뀔 때마다 실행

  return (
    <div className="App">
      <div className="App-header">
        <h1>가위바위보!</h1>
      </div>
      <div>{computer}</div>
      <div>
        <button disabled={btnDisabled} onClick={onClickBtn("✊")}>
          ✊
        </button>
        <button disabled={btnDisabled} onClick={onClickBtn("✌️")}>
          ✌️
        </button>
        <button disabled={btnDisabled} onClick={onClickBtn("✋")}>
          ✋
        </button>
      </div>
      <div>나의 선택: {user}</div>
      <div>{result}</div>
      <div>현재 점수 : {score}점 </div>
    </div>
  );
}

export default RockPaperScissors;
