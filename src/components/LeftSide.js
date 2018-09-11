import React, { Component } from 'react';
import { transitionGoldSmall, transitionGoldSmallLeft, moveHomePageImg } from '../util/animation';

const LeftSide = () => {
  moveHomePageImg();
  return (
    <div id="leftSide" className="fullHeight flexRow">

      <div id="homeImgBox" className="flexRow">
        <img src="./img/cropped/five.png" alt="" />
      </div>

      <div id="navBar" className="fullWidth flexRow">
        <p onClick={transitionGoldSmall}>ABOUT ME</p>
        <p onClick={transitionGoldSmallLeft}>SERVICES</p>
        <p>FOLLOW ME</p>
      </div>
      <p id="name">MEDUSA</p>
      <p id="name2">SHOWOFF</p>
    </div>
  );
}

export default LeftSide;
