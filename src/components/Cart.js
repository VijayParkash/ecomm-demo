import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { countPrice, getImageUrl } from "../apis/ProductApi";
import { formatPrice } from "../helpers/helper";

import classes from "./Cart.module.css";

const Cart = ({ toggleCart }) => {
  const cartItems = useSelector((state) => state.CartItems.cartItems);
  console.log({ cartItems });
  const dispatch = useDispatch();

  const removeAllHandler = () => {
    dispatch({ type: "REMOVE_ALL" });
  };

  const productQuantityHandler = (event, item, quantity) => {
    event.preventDefault();
    dispatch({
      type: "UPDATE_ITEMS_IN_CART",
      payload: item,
      quantity: quantity,
    });
  };

  const subTotal = (price, quantity) => {
    return formatPrice(price * quantity);
  };

  return (
    <div className={classes.container}>
      <div className={classes.cart}>
        <div className={classes.title}>
          <h2 className={classes.h2}>
            Cart
            <span className={classes.cartNumber}>({cartItems.length})</span>
          </h2>
          <button className={classes.removeBtn} onClick={removeAllHandler}>
            Remove All
          </button>
        </div>
        {cartItems.length > 0 ? (
          <div className="body">
            {cartItems.map((item, index) => {
              const { name, image, quantity, price } = item;

              return (
                <div className={classes.item} key={index}>
                  <img
                    className={classes.img}
                    src={getImageUrl(image)}
                    alt={name}
                    width="200px"
                  ></img>
                  <div className={classes.text}>
                    <h5 className={classes.h5}>{name}</h5>
                    <h5 className={`${classes.price} ${classes.h5}`}>
                      {"$" + subTotal(price, quantity)}
                    </h5>
                  </div>
                  <div className={classes.counter}>
                    <button
                      className={classes.minus}
                      onClick={(event) =>
                        productQuantityHandler(event, item, -1)
                      }
                    >
                      -
                    </button>
                    <div className={classes.display}>{quantity}</div>
                    <button
                      className={classes.plus}
                      onClick={(event) =>
                        productQuantityHandler(event, item, 1)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <h3 className={classes.empty}>Your cart is empty</h3>
        )}

        {cartItems.length > 0 ? (
          <>
            <div className={classes.total}>
              <h4 className={classes.h4}>Total:</h4>
              <h3 className={classes.h3}>
                {"$" + formatPrice(countPrice(cartItems))}
              </h3>
            </div>
            <Link to="/checkout">
              <button className={classes.checkouBtn} onClick={toggleCart}>
                checkout
              </button>
            </Link>
          </>
        ) : (
          <Link to="/">
            <button className={classes.checkoutBtn} onClick={toggleCart}>
              Go Shopping
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Cart;
