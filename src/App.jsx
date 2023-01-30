import { useState, useEffect } from "react";
import axios from "axios";
import Coin from "./components/coin/Coin";
import Navbar from "./components/navbar/Navbar";
import "./app.css";

const url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";

function App() {
  const [coins, setCoins] = useState([]);

  const fetchCoins = async () => {
    try {
      const response = await axios.get(url);
      const data = response.data;
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
      <Navbar />
      <Coin coins={coins} />
    </>
  );
}

export default App;
