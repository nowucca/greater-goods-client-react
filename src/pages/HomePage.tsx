import React from "react";
import HomeHeroBox from "../components/HomeHeroBox";
import "./HomePage.css";
import "../App.css";

const HomePage: React.FC = () => {
  // TODO: You can add equivalent logic for beforeRouteUpdate if needed, for example using useEffect with react-router

  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1>Greater Goods Grocers</h1>
        <h3>Find quality fresh groceries and help your community thrive.</h3>
      </div>
      <section className="hero-boxes">
        <HomeHeroBox
          icon="fas fa-shopping-basket"
          title="Shop"
          id="shopText"
          byline="Shop for fresh, quality goods that are simply greater."
        />
        <HomeHeroBox
          icon="fas fa-money-bill-wave"
          title="Save"
          id="saveText"
          byline="Save money with low prices and save Greater Goods Points for your chosen community organizations."
        />
        <HomeHeroBox
          icon="fas fa-hands-helping fa-2x"
          title="Support"
          id="supportText"
          byline="Support your chosen Community organizations by donating Greater Goods Points."
        />
      </section>
    </div>
  );
};

export default HomePage;
