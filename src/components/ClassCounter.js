import React, { Component } from 'react';
import './CounterStyle.css';

class ClassCounter extends Component {
  state = { count: 0 };

  increment = () => this.setState({ count: this.state.count + 1 });

  decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  render() {
    return (
      <div className="counter-box">
        <h2>Class Component</h2>
        <div className="number-display">{this.state.count}</div>
        <div className="btn-row">
          <button onClick={this.decrement}>💖 −</button>
          <button onClick={this.increment}>+ 💖</button>
        </div>
      </div>
    );
  }
}

export default ClassCounter;
