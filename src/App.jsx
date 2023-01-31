import { useState, useEffect } from "react";
import axios from "axios";
import Coins from "./components/coin/Coin";
import Navbar from "./components/navbar/Navbar";
import "./app.css";
import { BrowserRouter as Router } from "react-router-dom";

const url = import.meta.env.VITE_APP_URL;

function App() {
  const [coins, setCoins] = useState([]);

  const fetchCoins = async () => {
    try {
      const response = await axios.get(
        `${url}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`,
      );
      const data = response.data;
      console.log(data);
      setCoins(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <>
      <Router>
        <Navbar />
      </Router>

      <Coins coins={coins} />
    </>
  );
}

export default App;
