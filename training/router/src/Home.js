import React, { useState } from "react";
import "./App.css";

function Home() {
  const [price, setPrice] = React.useState("");
  const [refresh, setRefresh] = React.useState(true);

  //   React.useEffect(() => {
  //     const getData = setInterval(() => {
  //       fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
  //         .then((result) => result.json())
  //         .then((resultJson) => {
  //           // console.log(resultJson);
  //           setPrice(resultJson.bpi.USD.rate);
  //         });
  //     }, 10000);

  //     return () => clearInterval(getData);

  React.useEffect(() => {
    if (refresh) {
      fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then((result) => result.json())
        .then((resultJson) => {
          // console.log(resultJson);
          setPrice(resultJson.bpi.USD.rate);
        });
      setRefresh(false);
    }
  }, [refresh]);

  return (
    <div className="App">
      <h1>BTC Price</h1>
      <header className="App-header">
        <p id="data-display">BTC: ${price}</p>
        <button onClick={() => setRefresh(true)}>Refresh</button>
      </header>
    </div>
  );
}

export default Home;
