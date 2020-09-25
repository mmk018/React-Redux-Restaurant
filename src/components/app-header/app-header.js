import React from "react";
import cartIcon from "./shopping-cart-solid.svg";
import "./app-header.scss";
import { Link } from "react-router-dom";

const AppHeader = ({ total }) => {
  return (
    <header className="header">
      <ul style={{ display: "flex" }}>
        <li>
          <Link className="header__link" to="/menu">
            Menu
          </Link>
        </li>
        <li>
          <Link className="header__link" to="/cart">
            <img className="header__cart" src={cartIcon} alt="cart"></img>
            Total: {total} $
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default AppHeader;
