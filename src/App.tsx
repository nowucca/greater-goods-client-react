import { Routes, Route } from "react-router-dom";
import "/src/assets/global.css";

import "./App.css";
import HomePage from "./pages/HomePage";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";

export default function App() {
  return (
    <div className="app">
      <AppHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
      <AppFooter />
    </div>
  );
}
