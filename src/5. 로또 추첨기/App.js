import "./App.css";
import { useState, useRef, useEffect, useMemo } from "react";
import Ball from "./Ball";
import Input from "./Input";

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

  const prize = (arr, winNum) => {
    let money = "";
    arr.forEach((el) => {
      if (winNum.includes(el)) {
        console.log(el);
        money += "💵 ";
      }
    });
    console.log(money);
    return money;
  };

  const lottoNum = useMemo(() => getWinner(), []);
  const [isFirst, setIsFirst] = useState(true);
  const [arr, setArr] = useState([]);
  const [winNum, setWinNum] = useState(lottoNum);
  const [winBalls, setWinBalls] = useState([]);
  const [bonus, setBonus] = useState(null);
  const [retry, setRetry] = useState(false);
  const [msg, setMsg] = useState("🎖️로또에 도전해보세요!");
  const [money, setMoney] = useState("");
  const timeouts = useRef([]);

  const onClick = (e) => {
    e.preventDefault();
    console.log(arr);
    //입력 확인
    if (arr.length !== 7) {
      setMsg("로또 번호가 모자라요! 번호는 7자리 입니다.");
      return;
    } else {
      setMsg(
        "당첨 번호를 아래에서 확인하세요!\n재시도는 버튼을 다시 눌러주세요."
      );
    }

    //TODO:당첨처리
    //1회차 처리
    if (isFirst) {
      setWinNum(getWinner());
      setIsFirst(false);
    } else {
      setWinNum(getWinner());
      setWinBalls([]);
      setBonus(null);
      setRetry(false);
    }
    const gold = prize(arr, winNum);
    setMoney(gold);
    timeouts.current = [];
  };
  useEffect(() => {
    if (isFirst) return;
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
        <div className="input__wrapper">
          <Input convert={arr} />
        </div>
        <div className="balls">
          {winBalls.map((v) => (
            <Ball key={v} number={v} />
          ))}
        </div>
        {isFirst ? "" : <div>보너스!</div>}
        {bonus && <Ball key={bonus} number={bonus} />}
        <div className="money">{money}</div>
        {isFirst ? (
          <button className="retry" onClick={onClick}>
            가보자고!
          </button>
        ) : (
          <button className="retry" onClick={onClick}>
            다시!
          </button>
        )}
      </div>
    </div>
  );
}

export default Lotto;
