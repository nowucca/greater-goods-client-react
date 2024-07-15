import React from "react";
import { Link, useLocation } from "react-router-dom";
import type { CategoryItem } from "../types";
import { useCategoryContext } from "../context/CategoryContext";
import "./HeaderNavBar.css";

interface HeaderNavbarProps {
  visible: boolean;
}

const HeaderNavbar: React.FC<HeaderNavbarProps> = ({ visible }) => {
  const { categories, lastSelectedCategoryName } = useCategoryContext();
  const location = useLocation();

  const showActiveCategory = (category: CategoryItem): boolean => {
    return (
      location.pathname !== "/" && lastSelectedCategoryName === category.name
    );
  };

  if (!visible) return null;

  return (
    <nav className="header-navbar">
      <ul>
        {categories.map((cat) => (
          <li
            key={cat.categoryId}
            className={showActiveCategory(cat) ? "active" : ""}
          >
            <Link to={`/category/${cat.name}`}>{cat.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNavbar;
