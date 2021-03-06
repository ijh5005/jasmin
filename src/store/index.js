import React, { Component } from 'react';
const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'ANIMATION':
      return {
        ...state,
        animationClass: {
          ...state.animationClass,
          ...action.payload
        }
      }
    case 'NAVIGATE':
      return {
        ...state,
        currentPage: {
          ...action.payload
        }
      }
    default:
      return state
  }
}

export class Provider extends Component {
  state = {
    dispatch: action => this.setState(state => reducer(state, action)),
    animationClass: {},
    currentPage: { home: 'selected' },
    videos: [
      {
        id: 1,
        link: "https://www.youtube.com/embed/7n2bsB5jkFA",
        text: "description of the videos that will be given to me by miss jasmin taylor burke :)!! description of the videos that will be given to me by miss jasmin taylor burke :)!!"
      },
      {
        id: 2,
        link: "https://www.youtube.com/embed/GNWriGwPdq8",
        text: "description of the videos that will be given to me by miss jasmin taylor burke :)!! description of the videos that will be given to me by miss jasmin taylor burke :)!!"
      },
      {
        id: 3,
        link: "https://www.youtube.com/embed/56sz0yIHGCc",
        text: "description of the videos that will be given to me by miss jasmin taylor burke :)!! description of the videos that will be given to me by miss jasmin taylor burke :)!!"
      },
      {
        id: 4,
        link: "https://www.youtube.com/embed/U3OX2OPKJW0",
        text: "description of the videos that will be given to me by miss jasmin taylor burke :)!! description of the videos that will be given to me by miss jasmin taylor burke :)!!"
      }
    ],
    socialMedia: [
      {
        id: 1,
        link: "https://twitter.com/medusashowoff",
        icon: "fab fa-twitter",
        using: true,
        title: "title"
      },
      {
        id: 2,
        link: "https://www.instagram.com/medusashowoff/?hl=en",
        icon: "fab fa-instagram",
        using: true,
        title: "title"
      },
      {
        id: 3,
        link: "https://www.youtube.com/channel/UCm5nEOGuSLLL5m7mBuc_3Gg",
        icon: "fab fa-youtube",
        using: true,
        title: "title"
      },
      {
        id: 4,
        link: "#",
        icon: "fab fa-facebook",
        using: false,
        title: "title"
      }
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
