import axios, { AxiosResponse } from "axios";
import {
  ProductItem,
  CategoryItem,
  CustomerForm,
  OrderDetails,
  ShoppingCart,
} from "./types";

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

export async function placeOrder(
  cart: ShoppingCart,
  customerForm: CustomerForm
): Promise<OrderDetails> {
  const order = { cart: cart, customerForm: customerForm };
  console.log(JSON.stringify(order));
  try {
    const response: AxiosResponse<OrderDetails> = await axios.post(
      `${apiUrl}/orders`,
      order,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    // Handle unexpected errors
    throw new Error("An unexpected error occurred");
  }
}
