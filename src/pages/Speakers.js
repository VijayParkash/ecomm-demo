import React from "react";

import PageTitle from "../components/PageTitle";
import Products from "../components/Products";
import ProductsGallery from "../components/ProductsGallery";
import Signature from "../components/Signature";

const Speakers = () => {
  return (
    <>
      <PageTitle title="Speakers" />
      <main className="pagination">
        <Products category="speakers" />
        <ProductsGallery></ProductsGallery>
        <Signature></Signature>
      </main>
    </>
  );
};

export default Speakers;
