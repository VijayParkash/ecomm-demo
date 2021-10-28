import React from "react";
import PageTitle from "../components/PageTitle";
import ProductsGallery from "../components/ProductsGallery";
import Products from "../components/Products";
import Signature from "../components/Signature";

const Headphones = () => {
  return (
    <>
      <PageTitle title="Headphones" />
      <main className='pagination'>
      <Products category='headphones' />
      <ProductsGallery></ProductsGallery>
      <Signature></Signature>
      </main>
    </>
  );
};

export default Headphones;
