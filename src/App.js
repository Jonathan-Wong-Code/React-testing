import React from "react";
import ShowButton from "./components/button/ShowButton";
import Form from "./components/form/Form";
import Card from "./components/card/Card";
import APIExample from "./components/apiExample/APIExample";
import Header from "./components/header/Header";
class App extends React.Component {
  state = {
    name: "",
    email: ""
  };

  handleSubmit = (name, email) => {
    this.setState({ name, email });
  };

  render() {
    const { name, email } = this.state;
    return (
      <>
        <Header />
        {name && <p>My name is {name}</p>}
        {email && <p>My email is {email}</p>}
        <Card title="Happy Bunnies" author="Jon Wong" year={2001} />
        <ShowButton />
        <Form handleSubmit={this.handleSubmit} />
        <APIExample />
      </>
    );
  }
}

export default App;
