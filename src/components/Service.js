import React, { Component } from 'react';
import { Consumer } from '../store';

class Service extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { animationClass } = value;
          return (
            <div id="service" className={`flexCol ${animationClass.service}`}>
              <div className='heading'>SERVICES</div>
              <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          )
        }}
      </Consumer>
    );
  }
}

export default Service;
