import React, { Component } from 'react';
import { Button, Grid, Row, Col, Image } from 'react-bootstrap';
import img1 from '../../public/images/instagram/instagram_img_1.png';
import img2 from '../../public/images/instagram/instagram_img_2.png';
import img3 from '../../public/images/instagram/instagram_img_3.png';
import img4 from '../../public/images/instagram/instagram_img_4.png';
import img5 from '../../public/images/instagram/instagram_img_5.png';

class Instagram extends Component {

  render() {
    return (
      <div>
        <Button bsStyle="default">Follow us on Instagram</Button>
        <Grid>
          <Row>
            <Col xs={6} md={3}>
              <Image src={img1} responsive />
            </Col>
            <Col xs={6} md={3}>
              <Image src={img2} responsive />
            </Col>
            <Col xs={6} md={3}>
              <Image src={img3} responsive />
            </Col>
            <Col xs={6} md={3}>
              <Image src={img4} responsive />
            </Col>
            <Col xs={6} md={3}>
              <Image src={img5} responsive />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }

}

export default Instagram;
