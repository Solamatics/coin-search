
import {useState, useEffect} from 'react';
import Pagination from './pagination/Pagination'
import CoinItem from './coinItem/CoinItem'

const MainCoin = ({coins, coinsPerPage}) => {
    
    
  return (
        <>
            <CoinItem coins={coins} />
            <Pagination postsPerPage={coinsPerPage} totalPosts={coins.length} />
        </>
    )
}

export default MainCoin;