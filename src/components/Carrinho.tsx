import "../styles/components/carrinho.scss";
import { useState } from "react";

const Carrinho = () => {
  let [showCart, setShowCart] = useState<Boolean>(false);
  const [cartItem, setCartItem] = useState<Boolean>(true);

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
        {
          // possivelmente um map para listar todos os produtos
          cartItem ? (
            <>
              <div className="cart-items-container">
                <div className="cart-item">
                  <img
                    src="/images/image-product-1-thumbnail.jpg"
                    alt="Product 1"
                  />
                  <div className="item-text">
                    <p>Fall Limited Edition Sneakers</p>
                    <span>
                      $125.00 x 3 <b>$375.00</b>
                    </span>
                  </div>
                  <button className="delete">
                    <img src="/images/icon-delete.svg" alt="Delete item" />
                  </button>
                </div>
              </div>
              <div className="checkout-button">
                <button>Checkout</button>
              </div>
            </>
          ) : (
            <p>Your cart is empty</p>
          )
        }
      </div>
    </div>
  );
};

export default Carrinho;
