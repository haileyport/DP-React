import "./App.css";
import { useState, useRef, useEffect, useMemo } from "react";
import Ball from "./Ball";

function Lotto() {
  const getWinner = () => {
    const balls = Array(45)
      .fill()
      .map((v, i) => i + 1);
    const shuffle = [];
    while (balls.length > 0) {
      shuffle.push(
        balls.splice(Math.floor(Math.random() * balls.length), 1)[0]
      );
    }
    const bounus = shuffle[shuffle.length - 1];
    const winner = shuffle.slice(0, 6).sort((a, b) => a - b);

    return [...winner, bounus];
  };

  const lottoNum = useMemo(() => getWinner(), []);
  const [isFirst, setIsFirst] = useState(true);
  const [winNum, setWinNum] = useState(lottoNum);
  const [winBalls, setWinBalls] = useState([]);
  const [bonus, setBonus] = useState(null);
  const [retry, setRetry] = useState(false);
  const [msg, setMsg] = useState("🎖️로또에 도전해보세요!");
  const timeouts = useRef([]);

  const onClick = (e) => {
    e.preventDefault();
    setMsg("결과입니다!");

    setWinNum(getWinner());
    setWinBalls([]);
    setBonus(null);
    setRetry(false);

    timeouts.current = [];
  };

  useEffect(() => {
    for (let i = 0; i < winNum.length - 1; i++) {
      timeouts.current[i] = setTimeout(() => {
        setWinBalls((prev) => [...prev, winNum[i]]);
      }, (i + 1) * 100); //순서대로 나오게
    }
    timeouts.current[6] = setTimeout(() => {
      setBonus(winNum[6]);
      setRetry(true);
    }, 700);
    return () => {
      timeouts.current.forEach((v) => {
        clearTimeout(v);
      });
    };
  }, [winNum]);

  return (
    <div className="App">
      <div className="App-header">
        <h1>오늘의 행운 번호</h1>
      </div>
      <div className="lotto">
        <div>{msg}</div>
        <div className="balls">
          {winBalls.map((v) => (
            <Ball key={v} number={v} />
          ))}
        </div>
        <div>보너스!</div>
        {bonus && <Ball key={bonus} number={bonus} />}
        <button className="retry" onClick={onClick}>
          가보자고!
        </button>
      </div>
    </div>
  );
}

export default Lotto;
