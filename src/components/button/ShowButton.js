import React, { Component } from "react";
class ShowButton extends Component {
  state = {
    message: ""
  };

  handleClick = () => {
    this.setState({ message: "hello" });
  };

  render() {
    const { message } = this.state;
    return (
      <div>
        <h2> BUTTON COMPONENT</h2>
        <button onClick={this.handleClick} data-testid="show-button-button">
          Push
        </button>
        {message && <p data-testid="show-button-message">{message}</p>}
      </div>
    );
  }
}

export default ShowButton;
