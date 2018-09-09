import React, { Component } from 'react';
import { Consumer } from '../store';
import { shortenText } from '../util/filter';

class RightSide extends Component {
  state = {

  }
  render() {
    return (
      <Consumer>
        {value => {
          const { videos, socialMedia } = value;
          return (
            <div id="rightSide" className="fullHeight flexCol">
              <div id="rightSideTop" className="h50 fullWidth flexCol">
                <div id="socialMedia" className="flexRow">
                  {socialMedia.map(socialMediaData => {
                    if(socialMediaData.using){
                      return <a key={socialMediaData.id} target="_blank" href={socialMediaData.link}><i className={socialMediaData.icon}></i></a>
                    }
                  })}
                </div>
              </div>

              <div id="rightSideBottom" className="h50 fullWidth flexRow">
                <div id="videoSlideHolder" className="">
                  {videos.map(video => (
                    <div key={video.id}  className="videoBox">
                      <div>
                        <iframe width="auto" height="100%" src={video.link} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                      </div>
                      <div className="descriptionBox flexRow">
                        <p>{shortenText(video.text)}</p>
                      </div>
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
