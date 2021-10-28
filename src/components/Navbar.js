import React, { useState } from "react";
import { Link } from "react-router-dom";

import classes from "./Navbar.module.css";
import logo from "../assets/shared/desktop/logo.svg";
import cart from "../assets/shared/desktop/icon-cart.svg";
import Cart from "./Cart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItems = useSelector((state) => state.CartItems.cartItems);

  const toggleCart = () => {
    setIsCartOpen((isCartOpen) => !isCartOpen);
  };
  return (
    <>
      <div className={classes.navbar}>
        <div className={classes.container}>
          <Link to="/">
            <img src={logo} alt="brand logo" />
          </Link>
          <ul>
            <Link to="/">
              <li>HOME</li>
            </Link>
            <Link to="/headphones">
              <li>HEADPHONES</li>
            </Link>
            <Link to="/speakers">
              <li>SPEAKER</li>
            </Link>
            <Link to="/earphones">
              <li>EARPHONES</li>
            </Link>
          </ul>
          <button className={classes.cartContainer} onClick={toggleCart}>
            <img src={cart} alt="cart logo"></img>
            <span className={classes.number}>{cartItems.length}</span>
          </button>
          {isCartOpen && <Cart toggleCart={toggleCart} />}
        </div>
      </div>
    </>
  );
};

export default Navbar;
