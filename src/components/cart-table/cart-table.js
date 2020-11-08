import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { deleteFromCart } from "../../actions";
import WithRestoService from "../hoc";
import uuid from "react-uuid";

import "./cart-table.scss";

const CartTable = ({ items, deleteFromCart, RestoService }) => {
  const [state, setState] = useState(0);
  let check = 0;

  items.map((item) => {
    check += item.qtty;
  });
  if (check === 0) {
    return <div className="cart__title"> Your Cart is Empty :( </div>;
  }
  return (
    <>
      <div className="cart__title">Your Order:</div>
      <div className="cart__list">
        {items.map((item) => {
          const { price, title, url, id, qtty } = item;
          if (qtty > 0) {
            return (
              <div key={uuid()} id={id} className="cart__item">
                <img src={url} className="cart__item-img" alt={title}></img>
                <div className="cart__item-title">{title}</div>
                <div className="cart__item-price">
                  {price}$ * {qtty}
                </div>
                <div
                  onClick={() => {
                    deleteFromCart(id);
                    setState(state + 1);
                  }}
                  className="cart__close"
                >
                  &times;
                </div>
              </div>
            );
          }
        })}
      </div>
      <button
        onClick={() => {
          RestoService.setOrder(generateOrder(items));
        }}
        className="order"
      >
        Place order
      </button>
    </>
  );
};

const generateOrder = (items) => {
  const newOrder = items.filter((item) => {
    if (item.qtty > 0) {
      return {
        id: item.id,
        qtty: item.qtty,
      };
    }
  });
  console.log(newOrder);

  return newOrder;
};

const mapStateToProps = ({ items }) => {
  return {
    items,
  };
};

const mapDispatchToProps = {
  deleteFromCart,
};

export default WithRestoService()(
  connect(mapStateToProps, mapDispatchToProps)(CartTable)
);
