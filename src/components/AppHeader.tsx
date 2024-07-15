import React from "react";
import { Link } from "react-router-dom";
import HeaderSearchBar from "./HeaderSearchBar.tsx";
import HeaderCart from "./HeaderCart";
import "./AppHeader.css";
import { getSiteImageUrl } from "../utils.ts";

const AppHeader: React.FC = () => {
  return (
    <header id="header">
      <div id="left-header">
        <div id="logo">
          <Link to="/">
            <img
              src={getSiteImageUrl("logo.png")}
              alt="Greater Goods Grocers"
            />
          </Link>
        </div>

        <div id="logo-text">
          <a href="#">
            <span>Greater Goods Grocers</span>
          </a>
        </div>
      </div>

      <div id="mid-header">
        <HeaderSearchBar />
      </div>

      <div id="right-header">
        <HeaderCart />

        <div id="avatar-area">
          <a href="#">
            <img src={getSiteImageUrl("avatar.png")} alt="Avatar Icon" />
          </a>
        </div>

        <div id="account-area">
          <div id="welcome-message">
            <span>Welcome, Guest</span>
          </div>
          <div id="signin-links">Sign In | Register</div>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
