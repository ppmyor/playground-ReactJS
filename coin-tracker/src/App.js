import { useEffect, useState } from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [money, setMoney] = useState(0);
    const [coinCost, setCoinCost] = useState(0);
    const onSelect = (event) => {
        setCoinCost(event.target.value);
    };
    const onChange = (event) => {
        setMoney(event.target.value);
    };
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) => {
                setCoins(json);
                setLoading(false);
            });
    }, []);
    return (
        <div>
            <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
            {loading ? (
                <strong>Loading...</strong>
            ) : (
                <div>
                    <select onChange={onSelect}>
                        {coins.map((coin) => (
                            <option key={coin.id} value={coin.quotes.USD.price}>
                                {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
                            </option>
                        ))}
                    </select>
                    <h3>Exchange Money</h3>
                    <input type="text" onChange={onChange} value={money} />
                    <h3>Choose Coin</h3>
                    <input type="text" value={Math.round(money / coinCost)} disabled />
                </div>
            )}
        </div>
    );
}

export default App;
