import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel>
        <div style={{ height: "200px" }}>
          <img src="images/pic01.jpg" alt="test" />
          <p className="legend">Sponsor 1</p>
        </div>
        <div style={{ height: "200px" }}>
          <img src="images/pic01.jpg" alt="test" />
          <p className="legend">Sponsor 2</p>
        </div>
        <div style={{ height: "200px" }}>
          <img src="images/pic01.jpg" alt="test" />
          <p className="legend">Sponsor 3</p>
        </div>
      </Carousel>
    );
  }
}

export default DemoCarousel;
