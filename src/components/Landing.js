import React, { Component }  from 'react';
import { landingPageAnimation } from '../util/animation';

const Landing = () => {
  landingPageAnimation();
  return (
    <div id='landingPage' className='flexRow'>
      <div id="homeImgBox2" className="flexRow">
        <img src="./img/cropped/five.png" alt="" />
      </div>
      <div className='landingNameHolder'>
        <p id='landingName' className="landingName">MEDUSA</p>
        <p id='landingName2' className="landingName2">SHOWOFF</p>
      </div>
    </div>
  );
}

export default Landing;
