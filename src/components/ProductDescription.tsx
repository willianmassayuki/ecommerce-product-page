import "../styles/components/productDescription.scss";
import ProductCounter from "../components/ProductCount.tsx";

// Context
import { SetStateAction, useContext } from "react";
import { DataContext } from "../context/DataContext";

const cartIcon: JSX.Element = (
  <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
      fill="#69707D"
      fill-rule="nonzero"
    />
  </svg>
);

type Order = {
  id: number;
  qtd: number;
};

type VoteCountProps = {
  votes: number;
  setVotes: React.Dispatch<React.SetStateAction<number>>;
  orders: Order[];
  setOrders: React.Dispatch<React.SetStateAction<Order[]>>;
};

const ProductDescription = ({
  votes,
  setVotes,
  orders,
  setOrders,
}: VoteCountProps) => {
  //Extraindo dados do context
  const { dados } = useContext(DataContext);

  function addProduct(id, qtd) {
    // Verifica se já existe um pedido com o mesmo id
    const existingOrder = orders.find((order) => order.id === id);

    if (existingOrder) {
      // Se o pedido com o mesmo id já existe, atualize a quantidade
      setOrders((prev) =>
        prev.map((order) =>
          order.id === id ? { ...order, qtd: order.qtd + qtd } : order
        )
      );
    } else {
      setOrders((prev) => [...prev, { id: id, qtd: qtd }]);
    }
  }
  return (
    <>
      <div className="main-content">
        <h4>{dados.products[0].title}</h4>
        <h1>{dados.products[0].subtitle}</h1>
        <p>{dados.products[0].description}</p>
      </div>
      <div className="price-info">
        <div className="price-main">
          <h2>
            $
            {dados.products[0].price -
              dados.products[0].price * dados.products[0].discount}
          </h2>
          <h4>{dados.products[0].discount * 100}%</h4>
        </div>
        <p>${dados.products[0].price}</p>
      </div>
      <div className="actions">
        <ProductCounter votes={votes} setVotes={setVotes} />
        <button
          className="add"
          onClick={() => addProduct(dados.products[0].id, votes)}
        >
          {cartIcon}
          <span>Add to cart</span>
        </button>
      </div>
    </>
  );
};

export default ProductDescription;
