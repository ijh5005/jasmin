import React, { Component } from 'react';
import { Provider } from './store'

// components
import RightSide from './components/RightSide';
import LeftSide from './components/LeftSide';
import Landing from './components/Landing';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <Provider>
        <div id="container" className="flexRow">
          <Landing />
          <RightSide />
          <LeftSide />
          <About />
        </div>
      </Provider>
    );
  }
}

export default App;
