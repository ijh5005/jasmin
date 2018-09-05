import React, { Component } from 'react';
const Context = React.createContext();

export class Provider extends Component {
  state = {
    videos: [
      "https://www.youtube.com/embed/7n2bsB5jkFA",
      "https://www.youtube.com/embed/GNWriGwPdq8",
      "https://www.youtube.com/embed/56sz0yIHGCc",
      "https://www.youtube.com/embed/U3OX2OPKJW0"
    ]
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
