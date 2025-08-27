import React from "react";
import { Link } from "react-router-dom";

import "./Cart.css";
import { useSelector, useDispatch } from 'react-redux';
// import { removeFromCart } from '../../redux/actions/cartActions.js';


function Cart() {

  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="cart-container">
      <h1>Cart</h1>
      {!cartItems.length ? (
        <p>No Item Added! Please add something to your cart</p>
      ) : (
        <>
          <div className="cart-list">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="item-price">${item.price}</div>
                <div className="item-name">{item.name}</div>
                <div className="item-expectedDelivery">
                  (Expected Delivery 3 - 6 days)
                </div>
              </div>
            ))}
          </div>
          <Link to="/checkout">
            <button className="item-btn">Next</button>
          </Link>
        </>
      )}
     
    </div>
  );
}

export default Cart;
