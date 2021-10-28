import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getImageUrl } from "../apis/ProductApi";

import classes from "./Products.module.css";

const Products = ({ category }) => {
  const allProducts = useSelector((state) => state.AllProducts.products);
  const filteredProducts = allProducts.filter(
    (ele) => ele.category === category
  );
  console.log(filteredProducts);

  return (
    <section>
      {filteredProducts.map((item) => {
        const { id, name, image, slug, description } = item;
        return (
          <article className={classes.productCard} key={id}>
            <div
              className={classes.imageContainer}
            >
              <img src={getImageUrl(image)} alt={name} sizes="50vw" />
            </div>
            <div className={classes.text}>
              {item.new && <p className="sub-title">New Product</p>}
              <h1>{name}</h1>
              <p>{description}</p>
              <Link to={{pathname : `/product-details/${slug}`, state:id}}>
                <button>SEE PRODUCT</button>
              </Link>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Products;
