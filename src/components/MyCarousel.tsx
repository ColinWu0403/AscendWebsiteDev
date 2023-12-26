// import React, { useState } from "react";
// import { images } from "../constants";
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "./CarouselItem";

const MyCarousel = () => {
  return (
    <div className="relative z-0 min-h-screen">
      {/* React Carousel */}
      {/* https://coreui.io/react/docs/static/react-83088efde08a5dedde9f67a954cb4b5b.jpg */}
      {/*  https://coreui.io/react/docs/static/vue-8a74d93fde1a02c247304291cce46797.jpg */}
      {/* https://coreui.io/react/docs/static/angular-2f3764e2ec8b0b47ebe68f2f80260ef1.jpg */}

      <Carousel>
        <Carousel.Item>
          <CarouselItem imageName="https://coreui.io/react/docs/static/react-83088efde08a5dedde9f67a954cb4b5b.jpg" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselItem imageName="https://coreui.io/react/docs/static/vue-8a74d93fde1a02c247304291cce46797.jpg" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <CarouselItem imageName="https://coreui.io/react/docs/static/angular-2f3764e2ec8b0b47ebe68f2f80260ef1.jpg" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MyCarousel;
