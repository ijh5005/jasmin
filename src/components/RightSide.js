import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Consumer } from '../store';

class RightSide extends Component {
  state = {

  }
  render() {
    return (
      <Consumer>
        {value => {
          const { videos } = value;
          return (
            <div id="rightSide" className="fullHeight flexCol">
              <div id="rightSideTop" className="h50 fullWidth flexCol">
                <div id="socialMedia" className="flexRow">
                  <a target="_blank" href="https://twitter.com/medusashowoff"><i className="fab fa-twitter"></i></a>
                  <a target="_blank" href="https://www.instagram.com/medusashowoff/?hl=en"><i className="fab fa-instagram"></i></a>
                  <a target="_blank" href="https://www.youtube.com/channel/UCm5nEOGuSLLL5m7mBuc_3Gg"><i className="fab fa-youtube"></i></a>
                  <a target="_blank" href=""><i className="fab fa-facebook"></i></a>
                </div>
                <div className="sideColors fullHeight sideColorsTop"></div>
              </div>

              <div id="rightSideBottom" className="h50 fullWidth flexRow">
                <div className="sideColors fullHeight sideColorsBottom"></div>

                <div id="videoSlideHolder" className="">
                  {videos.map(video => (
                    <div className="videoBox">
                      <iframe width="auto" height="100%" src={video} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        }}
      </Consumer>
    );
  }
}

export default RightSide;
