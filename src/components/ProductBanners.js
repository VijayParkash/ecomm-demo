import React from "react";
import { Link } from "react-router-dom";

import classes from "./ProductBanners.module.css";

const ProductBanners = () => {
  return (
    <section className={classes.section}>
      <article className={classes.orange}>
        <div className={classes.orangeText}>
          <h1>
            ZX9 <br></br>SPEAKER
          </h1>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link to={{ pathname: "/product-details/zx9-speaker", state: 6 }}>
            <button>see product</button>
          </Link>
        </div>
      </article>

      <article className={classes.gray}>
        <div className={classes.grayText}>
          <h1>ZX7 SPEAKER</h1>
          <Link to={{ pathname: "/product-details/zx7-speaker", state: 5 }}>
            <button className={classes.whiteBtn}>see product</button>
          </Link>
        </div>
      </article>

      <article className={classes.earphones}>
        <div className={classes.imageSide}></div>
        <div className={classes.textSide}>
          <h1>YX1 EARPHONES</h1>
          <Link to={{ pathname: "/product-details/yx1-earphones", state: 1 }}>
            <button className={classes.whiteBtn}>see product</button>
          </Link>
        </div>
      </article>
    </section>
  );
};

export default ProductBanners;
