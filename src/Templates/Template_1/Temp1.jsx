import React from 'react'
import './Temp1.css';
const Temp1 = () => {
  return (
    <div className="container">
      <div className="container_top">
        <span className="title">Try Our Creative Tool</span>
        <h2>
          On-the-Fly Creative <span>Resume and CV</span>
          <br /> Builder ✍️ Across Your Favorite Tools
        </h2>
      </div>
      <div className='container_btm'>
      <div className='box'>
          <h2><i class="fa-solid fa-newspaper"></i></h2>
          <h3>Increased Resumes <br />Productivity</h3>
          <p>Lorem ipsum dolor sit amet,
          <br />consectetur adipiscing elit. Nulla
          <br />neque quam ipsum dolor sit amet,
          <br />consectetur adipiscing elit. Nulla 
          <br />neque quam</p>
        </div>

        <div className='box'>
          <h2><i class="fa-solid fa-paper-plane"></i></h2>
          <h3>Produces high-quality 
          <br />Resume content.</h3>
          <p>Lorem ipsum dolor sit amet,
          <br />consectetur adipiscing elit. Nulla
          <br />neque quam ipsum dolor sit amet,
          <br />consectetur adipiscing elit. Nulla 
          <br />neque quam</p>
        </div>

        <div className='box'>
          <h2><i class="fa-regular fa-handshake"></i></h2>
          <h3>Offers Helpful <br />Suggestions.</h3>
          <p>Lorem ipsum dolor sit amet,
          <br />consectetur adipiscing elit. Nulla
          <br />neque quam ipsum dolor sit amet,
          <br />consectetur adipiscing elit. Nulla 
          <br />neque quam</p>
        </div>
      </div>
    </div>
  );
}
export default Temp1