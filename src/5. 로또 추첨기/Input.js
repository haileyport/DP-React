import React, { useState, useEffect } from "react";
import "./App.css";

const Input = ({ convert }) => {
  const changer = (i) => (e) => {
    const value = e.target.value;
    if (value.length > 2) {
      convert[i] = value.substr(0, 2);
    } else {
      convert[i] = value;
    }
  };

  return (
    <div>
      <input value={convert[0]} type="number" onChange={changer(0)}></input>
      <input value={convert[1]} type="number" onChange={changer(1)}></input>
      <input value={convert[2]} type="number" onChange={changer(2)}></input>
      <input value={convert[3]} type="number" onChange={changer(3)}></input>
      <input value={convert[4]} type="number" onChange={changer(4)}></input>
      <input value={convert[5]} type="number" onChange={changer(5)}></input>
      <input value={convert[6]} type="number" onChange={changer(6)}></input>
    </div>
  );
};

export default Input;
