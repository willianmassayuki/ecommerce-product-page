import "../styles/components/productImage.scss";
import { useState } from "react";

const ProductImage = () => {
  const [currentImg, setCurrentImg] = useState<string>(
    "/images/image-product-1.jpg"
  );
  const productThumbs: string[] = [
    "/images/image-product-1-thumbnail.jpg",
    "/images/image-product-2-thumbnail.jpg",
    "/images/image-product-3-thumbnail.jpg",
    "/images/image-product-4-thumbnail.jpg",
  ];

  const [activeThumb, setActiveThumb] = useState<string>(productThumbs[0]);

  function changeImg(thumbImg: string) {
    const newImg = thumbImg.replace("-thumbnail", "");
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
