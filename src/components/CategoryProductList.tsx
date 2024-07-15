import React, { useEffect, useState } from "react";
import ProductBox from "./ProductBox";
import "./CategoryProductList.css";
import { fetchProducts } from "../services";
import { useCategoryContext } from "../context/CategoryContext";
import { ProductItem } from "../types";

const CategoryProductList: React.FC = () => {
  const { lastSelectedCategoryName } = useCategoryContext();
  const [productList, setProductList] = useState<ProductItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProductList = async () => {
      setLoading(true);
      try {
        const products = await fetchProducts(lastSelectedCategoryName);
        setProductList(products);
      } catch (error) {
        console.error("Failed to fetch products", error);
      } finally {
        setLoading(false);
      }
    };

    getProductList();
  }, [lastSelectedCategoryName]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="category-product-list">
      {productList.map((product: ProductItem) => (
        <ProductBox key={product.productId} product={product} />
      ))}
    </section>
  );
};

export default CategoryProductList;
