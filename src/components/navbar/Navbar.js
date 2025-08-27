import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import { GlobalContext } from "../../context/GlobalState";

const Navbar = () => {

  return (
    <div className="navbar">
      <Link to="/">
        <h2>shoppinn</h2>
      </Link>
      <ul className="navbar-ul">
        <Link to="/womens">
          <li>Womens</li>
        </Link>

        <Link to="/mens">
          <li>Mens</li>
        </Link>

        <Link to="/clothing">
          <li>Clothing</li>
        </Link>

        <Link to="/brands">
          <li>Brands</li>
        </Link>

        <Link to="/cart">
          <li>
            &#128722;{" "}
            <span className="card-count" style={{ color: "red" }}>

            </span>
          </li>
        </Link>
        <Link to="/orders">
          <li>Orders</li>
        </Link>
        <button className="nav-btn">Hi, John</button>
      </ul>
    </div>
  );
};

export default Navbar;
