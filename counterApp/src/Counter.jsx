import React, { Component } from "react";
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "Counter App",
      steps: props.steps,
    };
  }

  

  handleIncrement = () => {
    this.setState((prevState) => ({
      ...prevState,
      count: prevState.count + this.state.steps,
    }));
    console.log(this.state);
  };

  handleDecrement = () => {
    if (this.state.count - this.state.steps >= 0) {
      this.setState((prevState) => ({
        ...prevState,
        count: prevState.count - this.state.steps,
      }));
      console.log(this.state);
    }
  };

  render() {
    return (
      <div>
        <h2>Counter Component</h2>

        <button onClick={this.handleIncrement}>+</button>
        <p>{this.state.count}</p>
        <button onClick={this.handleDecrement}>-</button>
      </div>
    );
  }
}

export default Counter;
