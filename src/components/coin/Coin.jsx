import React from "react";
import CoinItem from "../coinItem/CoinItem";
import "./coin.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Coin from "../routes/Coin";

const Coins = ({ coins }) => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<CoinItem coins={coins} />} />
          <Route path="/coin" element={<Coin />}>
            <Route path=":coinId" element={<Coin />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default Coins;
