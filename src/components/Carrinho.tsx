import "../styles/components/carrinho.scss";
import { useState, useContext } from "react";
// Context
import { DataContext } from "../context/DataContext";

const Carrinho = () => {
  //Extraindo dados do context
  const { dados, teste, votes, setVotes, orders, setOrders } =
    useContext(DataContext);

  function handleOrder() {
    console.log(orders);
  }

  function deleteItem() {
    setOrders([]);
  }

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
          orders.length > 0 ? (
            <>
              <div className="cart-items-container">
                {orders.map((order) =>
                  dados.products.map((item) =>
                    order.id == item.id ? (
                      <div className="cart-item" key={item.id}>
                        <img
                          src={`${item.images.thumbnail[0]}`}
                          alt={`${item.subtitle}`}
                        />
                        <div className="item-text">
                          <p>{`${item.subtitle}`}</p>
                          <span>
                            {`$${item.price - item.price * item.discount}.00x${
                              order.qtd
                            }`}
                            <b>{`$${
                              (item.price - item.price * item.discount) *
                              order.qtd
                            }.00`}</b>
                          </span>
                        </div>
                        <button className="delete" onClick={() => deleteItem()}>
                          <img
                            src="/images/icon-delete.svg"
                            alt="Delete item"
                          />
                        </button>
                      </div>
                    ) : null
                  )
                )}
              </div>
              <div className="checkout-button" onClick={() => handleOrder()}>
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
