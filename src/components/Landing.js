import React, { Component } from 'react';
import { Consumer } from '../store';

let hasAnimated = false;

const landingPageAnimation = (dispatch) => {

  if(hasAnimated) return null;
  hasAnimated = true;

  setTimeout(() => {
    dispatch({
      type: 'ANIMATION', payload: { landingName: 'slideIn', landingName2: 'slideIn' }
    });
    setTimeout(() => {
      dispatch({
        type: 'ANIMATION', payload: { landingName: 'slideOut', landingName2: 'slideOut' }
      });
      setTimeout(() => {
        dispatch({
          type: 'ANIMATION', payload: { landingPage: 'fadeOut' }
        });
        setTimeout(() => {
          dispatch({
            type: 'ANIMATION', payload: { rightSide: 'slideIn' }
          });
        }, 500)
      }, 500)
    }, 2000)
  }, 1000);

};

class Landing extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch, animationClass } = value;
          landingPageAnimation(dispatch);
          return (
            <div id='landingPage' className={`flexRow ${animationClass.landingPage}`}>
              <div id="homeImgBox2" className={`flexRow ${animationClass.homeImgBox}`}>
                <img src="./img/cropped/five.png" alt="" />
              </div>
              <div className='landingNameHolder'>
                <p id='landingName' className={`landingName ${animationClass.landingName}`}>MEDUSA</p>
                <p id='landingName2' className={`landingName2 ${animationClass.landingName2}`}>SHOWOFF</p>
              </div>
            </div>
          )
        }}
      </Consumer>
    );
  }
}

export default Landing;
