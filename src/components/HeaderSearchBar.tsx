import React from "react";
import "./HeaderSearchBar.css";
import { getSiteImageUrl } from "../utils";

const HeaderSearchBar: React.FC = () => {
  return (
    <form id="header-search-bar" action="/category">
      <input id="search-bar" type="text" />
      <img
        id="search-icon"
        src={getSiteImageUrl("search-icon.png")}
        alt="Search Icon"
      />
    </form>
  );
};

export default HeaderSearchBar;
