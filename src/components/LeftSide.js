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
            <div id="leftSide" className="fullHeight flexCol">
              <div id="leftSideTop" className="h50 fullWidth flexCol">
                <div id='arrows' className='flexCol'><p>&#8605;</p><p>&#8605;</p><p>&#8605;</p><p>&#8605;</p></div>
                <div id="socialMedia" className="flexRow">
                  {socialMedia.map(socialMediaData => {
                    if(socialMediaData.using){
                      return <a key={socialMediaData.id} target="_blank" href={socialMediaData.link}><i className={socialMediaData.icon}></i></a>
                    }
                    return null;
                  })}
                </div>
              </div>

              <div id="leftSideBottom" className="h50 fullWidth flexRow">
                <div id="videoSlideHolder" className="">
                  {videos.map(video => (
                    <div key={video.id}  className="videoBox">
                      <div>
                        <iframe title={video.title} width="auto" height="100%" src={video.link} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
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

export default LeftSide;
