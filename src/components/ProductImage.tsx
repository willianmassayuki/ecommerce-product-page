import "../styles/components/productImage.scss";
import { useState } from "react";

// Context
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const ProductImage = () => {
  //Extraindo dados do context
  const { dados } = useContext(DataContext);

  const [currentImg, setCurrentImg] = useState<string>(
    dados.product.images.img[0]
  );
  const productThumbs: string[] = dados.product.images.thumbnail;

  const [activeThumb, setActiveThumb] = useState<string>(productThumbs[0]);

  function changeImg(thumbImg: string) {
    //const newImg = thumbImg.replace("-thumbnail", "");
    setCurrentImg(newImg);
    setActiveThumb(thumbImg);
  }

  return (
    <div className="images-container">
      <div className="images-main">
        <img src={`${currentImg}`} alt="Product" />
      </div>
      <div className="images-thumbs">
        {productThumbs.map((thumb, index) => (
          <div
            className="thumb"
            key={thumb}
            onClick={changeImg.bind(null, thumb)}
          >
            <img
              className={`${thumb === activeThumb && "active"}`}
              src={thumb}
              alt="Thumb"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImage;
