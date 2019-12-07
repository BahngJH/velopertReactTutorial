import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    err: false
  };

  componentDidCatch(err, info) {
    this.setState({
      err: true
    });
    console.log({ err, info });
  }

  render() {
    if (this.state.err) return <div>에러가 발생했습니다!</div>;
    return this.props.children;
  }
}

export default ErrorBoundary;
