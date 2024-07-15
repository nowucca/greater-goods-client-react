import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CategoryProductList from "../components/CategoryProductList";
import { useCategoryContext } from "../context/CategoryContext";

const CategoryPage: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const navigate = useNavigate();
  const { categories, setLastSelectedCategoryName } = useCategoryContext();

  useEffect(() => {
    const setCategory = async () => {
      try {
        const category = categories.find((cat) => cat.name === categoryName);
        if (!category) throw new Error("Category not found");
        await setLastSelectedCategoryName(category?.name || "");
      } catch (error) {
        console.error("Failed to set category", error);
        navigate("/not-found");
      }
    };

    setCategory();
  }, [categoryName, setLastSelectedCategoryName, navigate]);

  return (
    <div>
      <CategoryProductList />
    </div>
  );
};

export default CategoryPage;
