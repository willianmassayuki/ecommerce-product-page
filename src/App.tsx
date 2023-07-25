import "./styles/app.scss";
import Header from "./components/Header";
import ProductImage from "./components/ProductImage";

function App() {
  return (
    <>
      <Header />
      <div className="main-container">
        <div className="image-container">
          <ProductImage />
        </div>
        <div className="info-container">
          <p>Descrição e outras informações</p>
        </div>
      </div>
    </>
  );
}

export default App;
