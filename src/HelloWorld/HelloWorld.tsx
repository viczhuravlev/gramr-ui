import React, { Component } from 'react';

interface IHelloWorldProps {
  color: string;
}

class HelloWorld extends Component<IHelloWorldProps, any> {
  render() {
    return <div style={{ color: this.props.color }}>Hello world!</div>;
  }
}

export default HelloWorld;
