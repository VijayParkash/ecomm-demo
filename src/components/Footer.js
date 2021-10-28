import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/shared/desktop/logo.svg";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={classes.footerContainer}>
        <div className={classes.logo}>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <ul className={classes.itemList}>
          <Link to="/">
            <li className={classes.item}>Home</li>
          </Link>
          <Link to="/headphones">
            <li className={classes.item}>Headphones</li>
          </Link>
          <Link to="/speakers">
            <li className={classes.item}>Speakers</li>
          </Link>
          <Link to="/earphones">
            <li className={classes.item}>Earphones</li>
          </Link>
        </ul>
        <div className={classes.text}>
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <p className={classes.copyright}>
            Copyright 2021. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
