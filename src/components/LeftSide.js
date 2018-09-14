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
                <i className="fab fa-twitter"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-youtube"></i>
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
