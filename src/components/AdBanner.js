import React from "react";
import { Link } from "react-router-dom";

import classes from "./AdBanner.module.css";

const AdBanner = () => {
  return (
    <section className={classes.section}>
      <div className={classes.heroText}>
        <p className={classes.newProduct}> New product</p>
        <h1>XX99 Mark II HeadphoneS</h1>
        <p>
          Experience natural, lifelike audio and exceptional build<br></br>{" "}
          quality made for the passionate music enthusiast.
        </p>
        <Link
          to={{
            pathname: "/product-details/xx99-mark-two-headphones",
            state: 4,
          }}
        >
          <button>see product</button>
        </Link>
      </div>
      <div className={classes.heroImage}></div>
    </section>
  );
};

export default AdBanner;
