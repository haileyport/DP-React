import "./App.css";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";

import GuGuDan from "./1. 구구단/App";
import Word from "./2. 끝말잇기/App";
import BaseBall from "./3. 숫자야구/App";
import RockPaperScissors from "./4. 가위바위보/App";
import Lotto from "./5. 로또 추첨기/App";
import TicTacTo from "./6. 틱택토/App";
import Main from "./Main";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <div className="title">
          <Link to="/">DP 스터디 게임즈</Link>
        </div>
        <div className="menu">
          <Link to="/gugudan">구구단</Link>
          <Link to="/wordgame">끝말잇기</Link>
          <Link to="/baseball">야구게임</Link>
          <Link to="/rps">가위바위보</Link>
          <Link to="/lotto">로또</Link>
          <Link to="/tictacto">틱택토</Link>
        </div>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/gugudan" element={<GuGuDan />}></Route>
          <Route path="/wordgame" element={<Word />}></Route>
          <Route path="/baseball" element={<BaseBall />}></Route>
          <Route path="/rps" element={<RockPaperScissors />}></Route>
          <Route path="/lotto" element={<Lotto />}></Route>
          <Route path="/tictacto" element={<TicTacTo />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
