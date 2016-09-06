import React, { Component } from 'react';

export default class App extends Component {
  // this.props.children, any children components.
  render() {
    return (
      <div>
        React simple starter
        {this.props.children}
      </div>
    );
  }
}
