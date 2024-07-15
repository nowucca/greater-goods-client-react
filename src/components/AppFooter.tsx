import React from "react";
import "./AppFooter.css";

const AppFooter: React.FC = () => {
  return (
    <footer className="footer">
      <div id="hours">Store Hours: 7 days a week. 6am-10pm PST</div>
      <nav id="footer-nav">
        <ul className="navlist">
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Terms of Use</a>
          </li>
          <li>
            <a href="#">Directions</a>
          </li>
        </ul>
      </nav>

      <nav id="social-links">
        <ul className="navlist">
          <li>
            <a href="#">
              <i className="fab fa-facebook fa-3x"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-twitter fa-3x"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fab fa-instagram fa-3x"></i>
            </a>
          </li>
        </ul>
      </nav>

      <div id="copyright">
        <span>Copyright (c) 2019 Greater Goods, Inc.</span>
      </div>
    </footer>
  );
};

export default AppFooter;
