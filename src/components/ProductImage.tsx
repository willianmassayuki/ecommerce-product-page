import "../styles/components/productImage.scss";
import { useState } from "react";

// Context
import { useContext } from "react";
import { DataContext } from "../context/DataContext";

const ProductImage = () => {
  //Extraindo dados do context
  const { dados } = useContext(DataContext);

  const [currentImg, setCurrentImg] = useState<string>(
    dados.products[0].images.img[0]
  );
  const productThumbs: string[] = dados.products[0].images.thumbnail;

  const [activeThumb, setActiveThumb] = useState<string>(productThumbs[0]);

  let [imgModal, setImgModal] = useState(false);

  function changeImg(index: number) {
    //const newImg = thumbImg.replace("-thumbnail", "");
    setCurrentImg(dados.products[0].images.img[index]);
    setActiveThumb(dados.products[0].images.thumbnail[index]);
  }

  function OpenImage() {
    console.log("Abrir um modal com a imagem");
    setImgModal(!imgModal);
  }

  return (
    <>
      <div className="images-container">
        <div className="images-main">
          <img
            src={`${currentImg}`}
            alt="Product"
            onClick={() => OpenImage()}
          />
        </div>
        <div className="images-thumbs">
          {productThumbs.map((thumb, index) => (
            <div className="thumb" key={thumb} onClick={() => changeImg(index)}>
              <img
                className={`${thumb === activeThumb && "active"}`}
                src={thumb}
                alt="Thumb"
              />
            </div>
          ))}
        </div>
      </div>
      {imgModal ? (
        <div className="img-modal-wrapper">
          <div className="img-modal" onClick={() => OpenImage()}></div>
          <button className="open-close-img-modal" onClick={() => OpenImage()}>
            X
          </button>
          <div className="images-container-modal">
            <div className="images-main-modal">
              <img src={`${currentImg}`} alt="Product" />
            </div>
            <div className="images-thumbs-modal">
              {productThumbs.map((thumb, index) => (
                <div
                  className="thumb"
                  key={thumb}
                  onClick={() => changeImg(index)}
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
        </div>
      ) : null}
    </>
  );
};

export default ProductImage;
