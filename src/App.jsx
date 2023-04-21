import { useState, useEffect } from "react";
import axios from "axios";
import Coins from "./components/coin/Coin";
import Navbar from "./components/navbar/Navbar";
import "./app.css";
import { BrowserRouter as Router } from "react-router-dom";
import LoadingIcons from "react-loading-icons";
import Pagination from "./components/pagination/Pagination";

const url = import.meta.env.VITE_APP_URL;

function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [coinsPerPage, setCoinsPerPage] = useState(10);

  const fetchCoins = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${url}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`,
      );
      const data = response.data;
      console.log(data);
      setCoins(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  //Get current posts
  const indexOfLastPost = currentPage * coinsPerPage;
  const indexOfFirstPost = indexOfLastPost - coinsPerPage;
  const currentPosts = coins.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <Router>
        <Navbar />
      </Router>

      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LoadingIcons.SpinningCircles />
        </div>
      ) : (
        <>
          <Coins coins={currentPosts} coinsPerPage={coinsPerPage} />
          {/* <Pagination postsPerPage={coinsPerPage} totalPosts={coins.length} /> */}
        </>
      )}
    </>
  );
}

export default App;
