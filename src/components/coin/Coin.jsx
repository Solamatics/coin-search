import React from "react";
import CoinItem from "../coinItem/CoinItem";
import "./coin.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Coin from "../routes/Coin";

const Coins = ({ coins }) => {
  return (
    <div className="container">
      <div>
        <div className="heading">
          <p>#</p>
          <p className="coin-name">Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className="hide-mobile">Volume</p>
          <p className="hide-mobile">Market Cap</p>
        </div>
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<CoinItem coins={coins} />} />
          <Route path="/coin" element={<Coin />}>
            <Route path=":coinId" element={<Coin />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default Coins;
