import React, { Component } from "react";

// Stateless Functional Components
const Euro = ({ amount }) => <p>Euro: {(amount * 0.86).toFixed(2)}</p>;
const Pound = ({ amount }) => <p>Pound: {(amount * 0.76).toFixed(2)}</p>;

const App = () => (
  /* The Amount component becomes a Render Prop Component; it renders a FUNCTION that returns
    the Pound and Euro components as children. */
  <Amount>
    {amount => (
      <div>
        <Pound amount={amount} />
        <Euro amount={amount} />
      </div>
    )}
  </Amount>
);

class Amount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: 0
    };
  }

  onIncrement = () => {
    this.setState(state => ({ amount: state.amount + 1 }));
  };

  onDecrement = () => {
    this.setState(state => ({ amount: state.amount - 1 }));
  };

  render() {
    return (
      <div>
        <span>US Dollar: {this.state.amount} </span>

        <button type="button" onClick={this.onIncrement}>
          +
        </button>
        <button type="button" onClick={this.onDecrement}>
          -
        </button>

        {/* This has to be called as a function with the state passed in. Called "Children as a function" */}
        {this.props.children(this.state.amount)}
      </div>
    );
  }
}

export default App;
