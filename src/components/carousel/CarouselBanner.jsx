import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { img } from "./img/Data";
import "./carousel.css";
function CarouselBanner() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
      >
        {img.map((imageItemsLink) => {
          return <img src={imageItemsLink} alt="banner_img" />;
        })}
      </Carousel>
      <div className="hero_img"></div>
    </div>
  );
}

export default CarouselBanner;
