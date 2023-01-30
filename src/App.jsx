import { useState, useEffect } from "react";
import axios from "axios";
import Coin from "./components/coin/Coin";
import Navbar from "./components/navbar/Navbar";
import "./app.css";

const url = import.meta.env.VITE_APP_URL;

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
