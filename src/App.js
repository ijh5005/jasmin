import React, { Component } from 'react';
import { Provider } from './store'

// components
import RightSide from './components/RightSide';
import LeftSide from './components/LeftSide';

class App extends Component {
  render() {
    return (
      <Provider>
        <div id="container" className="flexRow">
          <RightSide />
          <LeftSide />
        </div>
      </Provider>
    );
  }
}

export default App;
