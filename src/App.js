import "./App.css";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";

import GuGuDan from "./1. 구구단/App";
import Word from "./2. 끝말잇기/App";
import BaseBall from "./3. 숫자야구/App";
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
        </div>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/gugudan" element={<GuGuDan />}></Route>
          <Route path="/wordgame" element={<Word />}></Route>
          <Route path="/baseball" element={<BaseBall />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
