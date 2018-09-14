import React, { Component } from 'react';
import { Consumer } from '../store';
import { shortenText } from '../util/filter';

class LeftSide extends Component {
  state = {

  }
  render() {
    return (
      <Consumer>
        {value => {
          const { videos, socialMedia } = value;
          return (
            <div className="leftSidePanel flexCol">
              <div id="socialMedia" className="flexCol">
                <a target="_blank" href="https://twitter.com/medusashowoff">
                  <i class="fab fa-twitter"></i>
                </a>
                <a target="_blank" href="https://www.instagram.com/medusashowoff/?hl=en">
                  <i class="fab fa-instagram"></i>
                </a>
                <a target="_blank" href="https://www.youtube.com/channel/UCm5nEOGuSLLL5m7mBuc_3Gg">
                  <i class="fab fa-youtube"></i>
                </a>
              </div>
              <div className="currentVideoBox">

                <div className="videoBox show">

                </div>

              </div>
              <div className="videoGalleryBox">

                <div className="videoBoxImg flexCol">
                  <div className="imgBox"></div>
                  <div className="titleBox flexRow">
                    <p>This is the title</p>
                  </div>
                  <div className="playButton flexRow">
                    <i className="far fa-play-circle"></i>
                  </div>
                  <div className="videoDescription">
                    <p>description of the videos that will be given to me by miss jasmin taylor burke :)!! description of the videos that will be given to me by miss jasmin taylor bur...</p>
                  </div>
                </div>

                <div className="videoBoxImg flexCol">
                  <div className="imgBox"></div>
                  <div className="titleBox flexRow">
                    <p>This is the title</p>
                  </div>
                  <div className="playButton flexRow">
                    <i className="far fa-play-circle"></i>
                  </div>
                  <div className="videoDescription">
                    <p>description of the videos that will be given to me by miss jasmin taylor burke :)!! description of the videos that will be given to me by miss jasmin taylor bur...</p>
                  </div>
                </div>

                <div className="videoBoxImg flexCol">
                  <div className="imgBox"></div>
                  <div className="titleBox flexRow">
                    <p>This is the title</p>
                  </div>
                  <div className="playButton flexRow">
                    <i className="far fa-play-circle"></i>
                  </div>
                  <div className="videoDescription">
                    <p>description of the videos that will be given to me by miss jasmin taylor burke :)!! description of the videos that will be given to me by miss jasmin taylor bur...</p>
                  </div>
                </div>

                <div className="videoBoxImg flexCol">
                  <div className="imgBox"></div>
                  <div className="titleBox flexRow">
                    <p>This is the title</p>
                  </div>
                  <div className="playButton flexRow">
                    <i className="far fa-play-circle"></i>
                  </div>
                  <div className="videoDescription">
                    <p>description of the videos that will be given to me by miss jasmin taylor burke :)!! description of the videos that will be given to me by miss jasmin taylor bur...</p>
                  </div>
                </div>

                <div className="videoBoxImg flexCol">
                  <div className="imgBox"></div>
                  <div className="titleBox flexRow">
                    <p>This is the title</p>
                  </div>
                  <div className="playButton flexRow">
                    <i className="far fa-play-circle"></i>
                  </div>
                  <div className="videoDescription">
                    <p>description of the videos that will be given to me by miss jasmin taylor burke :)!! description of the videos that will be given to me by miss jasmin taylor bur...</p>
                  </div>
                </div>

                <div className="videoBoxImg flexCol">
                  <div className="imgBox"></div>
                  <div className="titleBox flexRow">
                    <p>This is the title</p>
                  </div>
                  <div className="playButton flexRow">
                    <i className="far fa-play-circle"></i>
                  </div>
                  <div className="videoDescription">
                    <p>description of the videos that will be given to me by miss jasmin taylor burke :)!! description of the videos that will be given to me by miss jasmin taylor bur...</p>
                  </div>
                </div>

                <div className="videoBoxImg flexCol">
                  <div className="imgBox"></div>
                  <div className="titleBox flexRow">
                    <p>This is the title</p>
                  </div>
                  <div className="playButton flexRow">
                    <i className="far fa-play-circle"></i>
                  </div>
                  <div className="videoDescription">
                    <p>description of the videos that will be given to me by miss jasmin taylor burke :)!! description of the videos that will be given to me by miss jasmin taylor bur...</p>
                  </div>
                </div>

                <div className="videoBoxImg flexCol">
                  <div className="imgBox"></div>
                  <div className="titleBox flexRow">
                    <p>This is the title</p>
                  </div>
                  <div className="playButton flexRow">
                    <i className="far fa-play-circle"></i>
                  </div>
                  <div className="videoDescription">
                    <p>description of the videos that will be given to me by miss jasmin taylor burke :)!! description of the videos that will be given to me by miss jasmin taylor bur...</p>
                  </div>
                </div>

              </div>
            </div>
          )
        }}
      </Consumer>
    );
  }
}

export default LeftSide;
