import React from "react";
import { Link } from "react-router-dom";

import classes from "./ProductsGallery.module.css";
import Arrow from "../UI/Arrow";

const ProductsGallery = () => {
  return (
    <section className={classes.section}>
      <Link className={classes.width30} to="/headphones">
        <div className={classes.productBox}>
          <div className={classes.image}></div>
          <div className={classes.text}>
            <h6 className={classes.h6}>headphones</h6>
            <button className="btn-arrow">
              SHOP
              <i>
                <Arrow />
              </i>
            </button>
          </div>
        </div>
      </Link>
      <Link className={classes.width30} to="/speakers">
        <div className={classes.productBox}>
          <div className={`${classes.image} ${classes.speakers}`}></div>
          <div className={classes.text}>
            <h6 className={classes.h6}>Speakers</h6>
            <button className="btn-arrow">
              SHOP
              <i>
                <Arrow />
              </i>
            </button>
          </div>
        </div>
      </Link>
      <Link className={classes.width30} to="/earphones">
        <div className={classes.productBox}>
          <div className={`${classes.image} ${classes.earphones}`}></div>
          <div className={classes.text}>
            <h6 className={classes.h6}>Earphones</h6>
            <button className="btn-arrow">
              SHOP
              <i>
                <Arrow />
              </i>
            </button>
          </div>
        </div>
      </Link>
    </section>
  );
};

export default ProductsGallery;
