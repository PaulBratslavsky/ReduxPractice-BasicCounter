import React, { Component } from 'react';
import Counter from './Counter';

import store from './store/index';

class App extends Component {
  render() {
    return (
      <div className="container">
          <h1>Coding With Paul</h1>
          <Counter store={store}/>
          <p>Do you even React Bro?</p>
          <em>This project was completed using Eric Sowell awesome tutorial found on his YouTube channel.  Go check it out.  Best tutorial for beginners looking to learn redux.</em>
      </div>
    );
  }
}

export default App;
