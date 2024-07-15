import axios from "axios";
import { ProductItem, CategoryItem } from "./types";

const apiUrl =
  `${location.protocol}//${location.hostname}:` +
  `${location.port === "5173" ? "8080" : location.port}` +
  `${import.meta.env.BASE_URL}/api`;

export const fetchCategories = async (): Promise<CategoryItem[]> => {
  const response = await axios.get(`${apiUrl}/categories`);
  return response.data as CategoryItem[];
};

export const fetchProducts = async (
  categoryName: string
): Promise<ProductItem[]> => {
  const response = await axios.get(
    `${apiUrl}/products/category?name=${categoryName}`
  );
  return response.data as ProductItem[];
};
