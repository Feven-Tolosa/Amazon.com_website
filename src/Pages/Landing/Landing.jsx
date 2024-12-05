import React from "react";
import Catagory from "../../components/Catagory/Catagory";
import Product from "../../components/Product/Product";
import LayOut from "../../components/LayOut/LayOut";
import CarouselBanner from "../../components/carousel/CarouselBanner";
function Landing() {
  return (
    <LayOut>
      <CarouselBanner />
      <Catagory />
      <Product />
    </LayOut>
  );
}

export default Landing;
