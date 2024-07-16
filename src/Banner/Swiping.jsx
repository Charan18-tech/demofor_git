import React from 'react';
import { Carousel } from 'antd';
import './swiping.css';
import img1 from '../Images/pexels-krishna-videotech-2395903-4121047.jpg'
import img2 from '../Images/pexels-kumar-saurabh-625146-1456613.jpg'
import img3 from '../Images/pexels-spora-weddings-278507062-18881689.jpg'
import img4 from '../Images/pexels-weddingphotography-1444442.jpg'

const Swiping = () => (
  <Carousel className='bgImage' autoplay dots={null} effect={'fade'}>
    <div className='bgImage_inner' >
        <img src={img1} alt="" />
        <div className='static-text'>Online Biodata Maker and Newest Marriage Biodata Formats</div>
    </div>
    <div className='bgImage_inner' >
        <img src={img2} alt="" />
        <div className='static-text'>Online Biodata Maker and Newest Marriage Biodata Formats</div>
    </div>
    <div className='bgImage_inner' >
      <img src={img3} alt="" />
      <div className='static-text'>Online Biodata Maker and Newest Marriage Biodata Formats</div>
    </div>
    <div className='bgImage_inner' >
      <img src={img4} alt="" />
      <div className='static-text'>Online Biodata Maker and Newest Marriage Biodata Formats</div>
    </div>
  </Carousel>
);
export default Swiping;

