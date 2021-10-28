import React from "react";

import AdBanner from "../components/AdBanner";
import ProductBanners from "../components/ProductBanners";
import ProductsGallery from "../components/ProductsGallery";
import Signature from "../components/Signature";

const Home = () => {
  return (
    <main>
      <AdBanner></AdBanner>
      <ProductsGallery></ProductsGallery>
      <ProductBanners></ProductBanners>
      <Signature></Signature>
    </main>
  );
};

export default Home;
