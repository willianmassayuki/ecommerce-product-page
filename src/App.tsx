import "./styles/app.scss";
import Header from "./components/Header";
import ProductImage from "./components/ProductImage";
import ProductDescription from "./components/ProductDescription";
import { useState } from "react";

function App() {
  // Count vote
  const [votes, setVotes] = useState<number>(0);

  function mostraDados() {
    console.log(dados.product.description);
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
          <ProductDescription votes={votes} setVotes={setVotes} />
        </div>
      </div>
    </>
  );
}

export default App;
