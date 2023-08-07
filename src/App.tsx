import "./styles/app.scss";
import Header from "./components/Header";
import ProductImage from "./components/ProductImage";
import ProductDescription from "./components/ProductDescription";
import { useState, useContext } from "react";

// Context
import { DataContext } from "./context/DataContext";

function App() {
  //Extraindo dados do context
  const { dados, teste, votes, setVotes, orders, setOrders } =
    useContext(DataContext);

  function mostraDados() {
    console.log(orders);
  }

  return (
    <>
      <Header votes={votes} setVotes={setVotes} />
      <button onClick={mostraDados}>mostra dados</button>
      <div className="main-container">
        <div className="image-container">
          <ProductImage />
        </div>
        <div className="info-container">
          <ProductDescription
            votes={votes}
            setVotes={setVotes}
            orders={orders}
            setOrders={setOrders}
          />
        </div>
      </div>
    </>
  );
}

export default App;
