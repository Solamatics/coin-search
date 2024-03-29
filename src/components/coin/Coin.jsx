import React from "react";
import CoinItem from "../coinItem/CoinItem";
import "./coin.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Coin from "../routes/Coin";
import Pagination from "../pagination/Pagination";
import MainCoin from '../MainCoin'

const Coins = ({ coins, coinsPerPage }) => {
  return (
    <>
      <Router>
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <MainCoin coins={coins} coinsPerPage={coinsPerPage} />
                  
                </>
              }
            />
            <Route path="/coin" element={<Coin />}>
              <Route path=":coinId" element={<Coin />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default Coins;
