import React from "react";
import "./coinItem.css";

const CoinItem = ({ coins }) => {
  // format number to US dollar
  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <>
      {coins.map((coin) => (
        <div className="coin-row" key={coin.id}>
          <p>{coin?.market_cap_rank}</p>
          <div className="img-symbol">
            <img src={coin?.image} alt={coin?.name} />
            <p>{coin?.symbol}</p>
          </div>
          <p>{USDollar.format(coin?.current_price)}</p>
          <p>{coin?.price_change_24h}</p>
          <p className="hide-mobile">{coin?.total_volume}</p>
          <p className="hide-mobile">{coin?.market_cap}</p>
        </div>
      ))}
    </>
  );
};

export default CoinItem;
