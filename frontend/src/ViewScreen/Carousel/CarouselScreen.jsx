import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import banner2 from './banner/banner2.jpg';
import banner from './banner/banner.jpg';
import banner21 from './banner/banner21.jpg';
import banner13 from './banner/banner13.jpg';
import banner23 from './banner/banner23.jpg';

const breakPoints = [
  { width: 1, itemsToShow: 1 }
  // { width: 550, itemsToShow: 2 },
  // { width: 768, itemsToShow: 3 },
  // { width: 1200, itemsToShow: 4 }
];

const CarouselScreen = () => {
  return (
    <>
      {/* <h1 style={{ textAlign: "center" }}>
        Example to setup your carousel in react
      </h1> */}
      <div className="carousel">
        <Carousel breakPoints={breakPoints}>
          <Item>  <img src={banner2} alt="banner"/> </Item>
          <Item><img src={banner} height="100%" width="100%" alt="banner"/></Item>
          <Item><img src={banner21} height="100%" width="100%" alt="banner"/></Item>
          <Item><img src={banner13} height="100%" width="100%" alt="banner"/></Item>
          <Item><img src={banner23} height="100%" width="100%" alt="banner"/></Item>
          {/* <Item>Six</Item>
          <Item>Seven</Item>
          <Item>Eight</Item> */}
        </Carousel>
      </div>
    </>
  );
};

export default CarouselScreen;
