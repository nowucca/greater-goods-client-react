import { Routes, Route } from "react-router-dom";
import "/src/assets/global.css";

import "./App.css";
import HomePage from "./pages/HomePage";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import useIsHomePage from "./context/useIsHomePage.hook";
import HeaderNavbar from "./components/HeaderNavBar";
import CategoryPage from "./pages/CategoryPage";

export default function App() {
  const isHomePage = useIsHomePage();

  return (
    <div className="app">
      <AppHeader />
      <HeaderNavbar visible={!isHomePage} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <AppFooter />
    </div>
  );
}
