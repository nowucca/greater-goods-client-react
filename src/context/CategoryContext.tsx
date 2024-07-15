import React, { createContext, useState, useEffect, useContext } from "react";
import { CategoryItem } from "../types";
import { fetchCategories } from "../services.ts";

// Define the type for the context value
interface CategoryContextType {
  categories: CategoryItem[];
  lastSelectedCategoryName: string;
  setLastSelectedCategoryName: (name: string) => void;
}

const DEFAULT_CATEGORY_NAME = "Bakery";

// Create the context with default values
const CategoryContext = createContext<CategoryContextType>({
  categories: [],
  lastSelectedCategoryName: DEFAULT_CATEGORY_NAME,
  setLastSelectedCategoryName: () => {},
});

// Create a provider component
export const CategoryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const [lastSelectedCategoryName, setLastSelectedCategoryName] =
    useState<string>(DEFAULT_CATEGORY_NAME);

  useEffect(() => {
    fetchCategories()
      .then((data: CategoryItem[]) => setCategories(data))
      .catch(console.error);
  }, []); // Empty dependency array to run only once on page load

  return (
    <CategoryContext.Provider
      value={{
        categories,
        lastSelectedCategoryName,
        setLastSelectedCategoryName,
      }}
    >
      {children} {/* This renders the nested components, e.g., <App /> */}
    </CategoryContext.Provider>
  );
};

// Create a custom hook for easy access to the context
export const useCategoryContext = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error(
      "useCategoryContext must be used within a CategoryProvider"
    );
  }
  return context;
};
