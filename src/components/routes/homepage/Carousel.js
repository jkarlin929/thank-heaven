import React, { Component } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import img from '../../../../public/images/kissy-kissy_hero_img1.png';

class ControlledCarousel extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    const { index, direction } = this.state;

    return (
      <div className="carousel">
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          <Carousel.Item>
            <img alt="carousel" src={img} id="carouselImg"/>
            <Carousel.Caption>
              <div className="carouselText">
                <h2>~ New Year ~</h2>
                <h1>New Arrivals</h1>
                <Link to="/products">
                  <button id="carousel-button">
                    See All
                  </button>
                </Link>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img alt="carousel" src={img} id="carouselImg"/>
            <Carousel.Caption>
              <div className="carouselText">
                <h2>~ New Year ~</h2>
                <h1>New Arrivals</h1>
                <button id="carousel-button">See New Arrivals</button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img alt="carousel" src={img} id="carouselImg" />
            <Carousel.Caption>
              <div className="carouselText">
                <h2>~ New Year ~</h2>
                <h1>New Arrivals</h1>
                <button id="carousel-button">See New Arrivals</button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default ControlledCarousel;
