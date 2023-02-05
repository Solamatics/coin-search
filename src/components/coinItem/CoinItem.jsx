import React, { useState, useMemo } from "react";
import "./coinItem.css";
import { Link } from "react-router-dom";
import Coin from "../routes/Coin";

let PageSize = 10;

const CoinItem = ({ coins }) => {
  // format number to US dollar
  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <>
      <div className="container">
        <div className="heading">
          <p>#</p>
          <p className="coin-name">Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className="hide-mobile">Volume</p>
          <p className="hide-mobile">Market Cap</p>
        </div>
      </div>
      {coins.map((coin) => (
        <Link to={`/coin/${coin.id}`} element={<Coin />} key={coin.id}>
          <div className="coin-row">
            <p>{coin?.market_cap_rank}</p>
            <div className="img-symbol">
              <img src={coin?.image} alt={coin?.name} />
              <p>{coin?.symbol.toUpperCase()}</p>
            </div>
            <p>{USDollar.format(coin?.current_price)}</p>
            <p>{coin?.price_change_24h.toFixed(2)}</p>
            <p className="hide-mobile">{coin?.total_volume}</p>
            <p className="hide-mobile">{coin?.market_cap}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default CoinItem;
