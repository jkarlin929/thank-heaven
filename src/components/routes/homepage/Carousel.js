import React, { Component } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import img from '../../../../public/images/kissy-kissy_hero_img.png';

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
      <Carousel
        activeIndex={index}
        direction={direction}
        onSelect={this.handleSelect}
      >
        <Carousel.Item>
          <img width={1450} height={500} alt="900x500" src={img} />
          <Carousel.Caption>
            <div>
              <h2>~ New Year ~</h2>
              <h1>New Arrivals</h1>
              <Button bsStyle="danger">See New Arrivals</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={1450} height={500} alt="900x500" src={img} />
          <Carousel.Caption>
            <div>
              <h2>~ New Year ~</h2>
              <h1>New Arrivals</h1>
              <Button bsStyle="danger">See New Arrivals</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img width={1450} height={500} alt="900x500" src={img} />
          <Carousel.Caption>
            <div>
              <h2>~ New Year ~</h2>
              <h1>New Arrivals</h1>
              <Button bsStyle="danger">See New Arrivals</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default ControlledCarousel;
