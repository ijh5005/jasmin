import React, { Component } from 'react';
import { Consumer } from '../store';

let hasAnimated = false;

const toAboutMePage = (dispatch) => {
  dispatch({
    type: 'ANIMATION', payload: { rightSide: 'toRightSide', about: 'showAboutPage', service: '' }
  });
  dispatch({
    type: 'NAVIGATE', payload: { aboutMe: 'selected' }
  });
}
const toSerivePage = (dispatch) => {
  dispatch({
    type: 'ANIMATION', payload: { rightSide: 'slideIn', service: 'showServicePage', about: '' }
  });
  dispatch({
    type: 'NAVIGATE', payload: { services: 'selected' }
  });
}
const toHomePage = (dispatch) => {
  dispatch({
    type: 'ANIMATION', payload: { rightSide: 'slideIn', service: '', about: '' }
  });
  dispatch({
    type: 'NAVIGATE', payload: { home: 'selected' }
  });
}
const moveHomePageImg = (dispatch) => {
  if(hasAnimated) return null;
  hasAnimated = true;

  setInterval(() => {
    dispatch({
      type: 'ANIMATION', payload: { homeImgBox: 'rotateLeft' }
    });
    setTimeout(() => {
      dispatch({
        type: 'ANIMATION', payload: { homeImgBox: 'rotateRight' }
      });
      setTimeout(() => {
        dispatch({
          type: 'ANIMATION', payload: { homeImgBox: 'bigImg' }
        });
        setTimeout(() => {
          dispatch({
            type: 'ANIMATION', payload: { homeImgBox: '' }
          });
        }, 200)
      }, 200)
    }, 200)
  }, 6000)
}

class RightSide extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch, animationClass, currentPage } = value;
          moveHomePageImg(dispatch);
          return (
            <div id="rightSide" className={`fullHeight flexRow ${animationClass.rightSide}`}>

              <div id="homeImgBox" className={`flexRow ${animationClass.homeImgBox}`}>
                <img src="./img/cropped/five.png" alt="" />
              </div>

              <div id="navBar" className="fullWidth flexRow">
                <p className={`pointer ${currentPage.home}`}     onClick={toHomePage.bind(this, dispatch)}>HOME</p>
                <p className={`pointer ${currentPage.aboutMe}`}  onClick={toAboutMePage.bind(this, dispatch)}>ABOUT ME</p>
                <p className={`pointer ${currentPage.services}`} onClick={toSerivePage.bind(this, dispatch)}>SERVICES</p>
              </div>
              <p id="name">MEDUSA</p>
              <p id="name2">SHOWOFF</p>
            </div>
          )
        }}
      </Consumer>
    );
  }
}

export default RightSide;
