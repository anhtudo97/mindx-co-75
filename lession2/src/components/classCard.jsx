import React from "react";

// Class Component
class Card extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };

  }

  onClick() {
    this.setState({
      count: 4,
    });
  }

  render() {
    return <button onClick={() => this.onClick()}>{this.state.count}</button>;
  }
}

export default Card;
