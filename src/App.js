import React, { Component } from 'react';

import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'Yurii',
  };

  onInputChange = ($event) => {
    this.setState({ username: $event.target.value });
  };

  render() {
    return (
        <div className="App">
          <UserInput
              changedValue={ this.onInputChange }
              currentValue={ this.state.username }
          />
          <UserOutput userName={ this.state.username } />
        </div>
    );
  }
}

export default App;
