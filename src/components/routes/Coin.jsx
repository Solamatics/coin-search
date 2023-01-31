import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./coin.css";

const url = import.meta.env.VITE_APP_URL;

const Coin = ({ id }) => {
  const [coin, setCoin] = useState({});

  const params = useParams();

  const fetchCoinDetail = async () => {
    try {
      const response = await axios.get(`${url}/coins/${params.coinId}`);
      setCoin(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCoinDetail();
  }, []);

  return (
    <div>
      <div className="coin-container">
        <div className="content">{coin.name}</div>
        <div className="content">
          <div className="rank">
            <span className="rank-btn">Rank # {coin?.market_cap_rank}</span>
          </div>
          <div className="info">
            <div className="coin-heading">
              {coin.image ? <img src={coin.image.small} alt="" /> : null}
              <p>{coin.name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  s;
};

export default Coin;
