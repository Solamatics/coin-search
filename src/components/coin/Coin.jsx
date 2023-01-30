import React from "react";
import CoinItem from "../coinItem/CoinItem";
import "./coin.css";

const Coin = ({ coins }) => {
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

      <CoinItem coins={coins} />
    </div>
  );
};

export default Coin;
