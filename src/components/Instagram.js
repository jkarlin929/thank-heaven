import React, { Component } from 'react';
import { Button, Grid, Row, Col, Image } from 'react-bootstrap';
import img1 from '../../public/images/instagram/instagram_img_1.png';
import img2 from '../../public/images/instagram/instagram_img_2.png';
import img3 from '../../public/images/instagram/instagram_img_3.png';
import img4 from '../../public/images/instagram/instagram_img_4.png';
import img5 from '../../public/images/instagram/instagram_img_7.png';

class Instagram extends Component {

  render() {
    return (
      <div className="ig">
        <div>
          <a href="https://www.instagram.com/thankheavenboutique/?hl=en">
            <button className='content-button' id="ig-follow">
              Follow us on Instagram
            </button>
          </a>
        </div>
        <div className="ig-pic">
          <Image width={500} height={500} src={img1} responsive />
          <Image width={500} height={500} src={img2} responsive />
          <Image width={500} height={500} src={img3} responsive />
          <Image width={500} height={500} src={img4} responsive />
          <Image width={500} height={500} src={img5} responsive />
        </div>
      </div>
    );
  }

}

export default Instagram;
