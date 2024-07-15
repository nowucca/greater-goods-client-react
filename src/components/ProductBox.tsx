import React from "react";
import { getProductImageUrl } from "../utils";
import type { ProductItem } from "../types";
import "./ProductBox.css";
import { asDollarsAndCents } from "../utils";
import { useCart } from "../context/CartContext";

interface ProductBoxProps {
  product: ProductItem;
}

const ProductBox: React.FC<ProductBoxProps> = ({ product }) => {
  const { dispatch } = useCart();

  const productImageFileName = (product: ProductItem): string => {
    let name = product.name.toLowerCase();
    name = name.replace(/ /g, "-");
    return `${name}.jpg`;
  };

  const handleAddToCart = (product: ProductItem) => {
    dispatch({ type: "ADD_PRODUCT", product: product });
  };

  return (
    <div className="product-box">
      <img
        className="product-image"
        src={getProductImageUrl(productImageFileName(product))}
        alt={product.name}
      />

      <div className="product-details">
        <span className="product-title">{product.name}</span>
        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
      </div>

      <div className="product-cost">
        <p className="product-price">{asDollarsAndCents(product.price)}</p>
        <p className="gg-points-badge">{product.points}</p>
      </div>
    </div>
  );
};

export default ProductBox;
