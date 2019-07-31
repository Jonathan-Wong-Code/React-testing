import React, { Component } from "react";

export default class Form extends Component {
  state = {
    name: "",
    email: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    const { name, email } = this.state;
    const { handleSubmit } = this.props;
    e.preventDefault();
    handleSubmit(name, email);
  };
  //Poke Api
  render() {
    const { name, email } = this.state;
    return (
      <div>
        <h2> FORM COMPONENT </h2>
        <form action="" onSubmit={this.handleSubmit} data-testid="form">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={this.onChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={this.onChange}
          />

          <button type="submit" disabled={!name || !email}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
