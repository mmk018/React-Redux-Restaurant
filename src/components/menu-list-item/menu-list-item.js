import React from "react";
import "./menu-list-item.scss";

const MenuListItem = ({ menuItem }) => {
  const { title, price, url, category } = menuItem;
  return (
    <li className="menu__item">
      <div className="menu__title">{title}</div>
      <img className="menu__img" src={url} alt={title}></img>
      <div className="menu__category">
        Category: <span>{category}</span>
        {category === "pizza" ? (
          <div>
            <img
              style={{ width: "50px", height: "50px" }}
              src="https://de.seaicons.com/wp-content/uploads/2015/06/pizza-icon.png"
            ></img>
          </div>
        ) : null}
        {category === "meat" ? (
          <div>
            <img
              style={{ width: "50px", height: "50px" }}
              src="https://freeiconshop.com/wp-content/uploads/edd/meat-flat.png"
            ></img>
          </div>
        ) : null}
        {category === "salads" ? (
          <div>
            <img
              style={{ width: "50px", height: "50px" }}
              src="https://cdn4.iconfinder.com/data/icons/flat-food-3/512/salad-512.png"
            ></img>
          </div>
        ) : null}
      </div>
      <div className="menu__price">
        Price: <span>{price}$</span>
      </div>
      <button className="menu__btn">Add to cart</button>
    </li>
  );
};

export default MenuListItem;
