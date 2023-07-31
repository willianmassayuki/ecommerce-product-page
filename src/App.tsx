import "./styles/app.scss";
import Header from "./components/Header";
import ProductImage from "./components/ProductImage";
import ProductDescription from "./components/ProductDescription";

function App() {
  return (
    <>
      <Header />
      <div className="main-container">
        <div className="image-container">
          <ProductImage />
        </div>
        <div className="info-container">
          <ProductDescription />
        </div>
      </div>
    </>
  );
}

export default App;
