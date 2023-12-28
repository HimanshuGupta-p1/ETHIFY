import { useState, useEffect } from "react";
import axios from 'axios'

const useCoin = () => {
    const [coins, setCoins] = useState([])
    useEffect(() => {
          axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en')
            .then(res => {
              setCoins(res.data);
              console.log(res.data);
            })
            .catch(error => console.log(error));
        }, []);
    
    return coins;
    
}

export default useCoin;