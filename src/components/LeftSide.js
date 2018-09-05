import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class LeftSide extends Component {
  render() {
    return (
      <div id="leftSide" className="fullHeight flexRow">

        <div id="homeImgBox" className="flexRow">
          <img src="./img/cropped/five.png" alt="" />
        </div>

        <div id="navBar" className="fullWidth flexRow">
          <p>ABOUT ME</p>
          <p>SERVICES</p>
          <p>FOLLOW ME</p>
        </div>
        <p id="name">MEDUSA</p>
        <p id="name2">SHOWOFF</p>
      </div>
    );
  }
}

export default LeftSide;
