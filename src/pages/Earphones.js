import React from "react";

import PageTitle from "../components/PageTitle";
import Products from "../components/Products";
import ProductsGallery from "../components/ProductsGallery";
import Signature from "../components/Signature";

const Earphones = () => {
  return (
    <>
      <PageTitle title="Earphones" />
      <main className="pagination">
        <Products category="earphones" />
        <ProductsGallery></ProductsGallery>
        <Signature></Signature>
      </main>
    </>
  );
};

export default Earphones;
