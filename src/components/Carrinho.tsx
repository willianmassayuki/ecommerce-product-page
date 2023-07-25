import "../styles/components/carrinho.scss";
import { useState } from "react";

const Carrinho = () => {
  let [showCart, setShowCart] = useState<Boolean>(false);

  function handleCartButton() {
    setShowCart(!showCart);
  }
  return (
    <div>
      <button onClick={handleCartButton}>
        <img src="images/icon-cart.svg" alt="Cart" />
      </button>
      <div className="cart-content" id={`${showCart === true && "show-cart"}`}>
        <h4>Cart</h4>
        <p>Your cart is empty</p>
      </div>
    </div>
  );
};

export default Carrinho;
