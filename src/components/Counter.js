import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: 0,
  };

  handleIncrement = () => {
    this.setState({
      value: this.state.value + 1,
    });
  };

  handleDecrement = () => {
    // if (this.state.value - 1 < 0) {
    //   this.setState({
    //     value: 0,
    //   });
    // } else {
    //   this.setState({
    //     value: this.state.value - 1,
    //   });
    // }

    this.setState({
      value: this.state.value - 1 < 0 ? 0 : this.state.value - 1,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleIncrement}> Increment </button>
        {this.state.value}
        <button onClick={this.handleDecrement}> Decrement</button>
      </div>
    );
  }
}

export default Counter;
