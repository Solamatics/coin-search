import React from "react";
import "./coinItem.css";

const CoinItem = ({ coins }) => {
  return (
    <>
      {coins.map((coin) => (
        <div className="coin-row" key={coin.id}>
          <p>{coin?.market_cap_rank}</p>
          <div className="img-symbol">
            <img src={coin?.image} alt={coin?.name} />
            <p>{coin?.symbol}</p>
          </div>
          <p>Current Price</p>
          <p>Current price Change in 24h</p>
          <p className="hide-mobile">Total Volume</p>
          <p className="hide-mobile">Coin Market Cap</p>
        </div>
      ))}
    </>
  );
};

export default CoinItem;
