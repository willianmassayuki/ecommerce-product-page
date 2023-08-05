import { createContext } from "react";

type dadoProps = {
  product: {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    discount: number;
    price: number;
    images: {
      img: string[];
      thumbnail: string[];
    };
  };
};

export const DataContext = createContext<dadoProps | null>(null);

export const DataProvider = ({ children }) => {
  const dados: dadoProps = {
    product: {
      id: 1,
      title: "SNEAKER COMPANY",
      subtitle: "Fall Limited Edition Sneakers",
      description:
        "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
      discount: 0.5,
      price: 250.0,
      images: {
        img: [
          "/images/image-product-1.jpg",
          "/images/image-product-2.jpg",
          "/images/image-product-3.jpg",
          "/images/image-product-4.jpg",
        ],
        thumbnail: [
          "/images/image-product-1-thumbnail.jpg",
          "/images/image-product-2-thumbnail.jpg",
          "/images/image-product-3-thumbnail.jpg",
          "/images/image-product-4-thumbnail.jpg",
        ],
      },
    },
  };
  return (
    <DataContext.Provider value={{ dados }}>{children}</DataContext.Provider>
  );
};
