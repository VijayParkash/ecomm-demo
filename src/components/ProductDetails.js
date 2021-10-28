import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import { getImageUrl } from "../apis/ProductApi";
import { formatPrice } from "../helpers/helper";
import classes from "./ProductDetails.module.css";
import ProductsGallery from "./ProductsGallery";
import Signature from "./Signature";
import Snakebar from "./Snakebar";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [snakebar, setSnakebar] = useState(false);
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.AllProducts.products);
  let location = useLocation();
  const getState = location.state;
  const filteredProduct = allProducts.filter((elem) => elem.id === getState)[0];

  useEffect(() => {
    const timer = setTimeout(() => {
      setSnakebar(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, [snakebar]);

  const quantityHandler = (event, quantity) => {
    event.preventDefault();
    setQuantity((q) => q + quantity);
  };

  if (filteredProduct) {
    const {
      name,
      image,
      category,
      features,
      description,
      includes,
      price,
      gallery: { first, second, third },
    } = filteredProduct;
    return (
      <main>
        {snakebar && <Snakebar />}
        <Link to={`/${category}`}>
          <p className={classes.goBack}>Go back</p>
        </Link>
        <article className={classes.topDescription}>
          <img
            className={classes.productImg}
            src={getImageUrl(image)}
            alt={name}
          />
          <div className={classes.rightSide}>
            {filteredProduct.new && <p className="sub-title">New Product</p>}
            <h1>{name}</h1>
            <p>{description}</p>
            <h3>{"$" + formatPrice(price)}</h3>
            <div className={classes.buttons}>
              <div className={classes.counter}>
                <button
                  className={classes.minus}
                  onClick={(event) => quantityHandler(event, -1)}
                >
                  -
                </button>
                <div className={classes.display}>{quantity}</div>
                <button
                  className={classes.plus}
                  onClick={(event) => quantityHandler(event, 1)}
                >
                  +
                </button>
              </div>
              <button
                className="addToCart"
                onClick={() => {
                  dispatch({
                    type: "ADD_ITEM_TO_CART",
                    payload: filteredProduct,
                    quantity: quantity,
                  });
                  setSnakebar(true);
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        </article>
        <div className={classes.bottomDescription}>
          <div className={classes.features}>
            <h2>Features</h2>
            <p>{features}</p>
          </div>
          <div>
            <h2>In the box</h2>
            <ul className={classes.itemBox}>
              {includes.map((i, index) => {
                const { quantity, item } = i;
                return (
                  <li key={index} className={classes.itemList}>
                    <span className={classes.span}>{quantity}x</span>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className={classes.gallery}>
          <img
            className={classes.imgGallery}
            src={getImageUrl(first)}
            alt="gallery"
          ></img>
          <img
            className={classes.imgGallery}
            src={getImageUrl(second)}
            alt="gallery"
          ></img>
          <img
            className={classes.imgGallery}
            src={getImageUrl(third)}
            alt="gallery"
          ></img>
        </div>
        <ProductsGallery />
        <Signature></Signature>
      </main>
    );
  } else {
    return "";
  }
};

export default ProductDetails;
