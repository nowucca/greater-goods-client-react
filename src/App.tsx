import { Routes, Route } from "react-router-dom";
import "/src/assets/global.css";

import "./App.css";
import HomePage from "./pages/HomePage";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import useNavigationBar from "./context/useNavigationBar.hook";
import HeaderNavbar from "./components/HeaderNavBar";
import CategoryPage from "./pages/CategoryPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";

export default function App() {
  const showNavigationBar = useNavigationBar();

  return (
    <div className="app">
      <AppHeader />
      <HeaderNavbar visible={showNavigationBar} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <AppFooter />
    </div>
  );
}
