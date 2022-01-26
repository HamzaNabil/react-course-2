import React, { Component } from "react";
import Counter from "./components/Counter";
import ProductsList from "./components/ProductsList";
import Users from "./components/Users";

class App extends Component {
  state = {
    nameChange: "",
    emailChange: "",
    numberChange: "",

    username: "",
    email: "",
    number: 0,

    isRender: false,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
      isRender: false,
    });
  };

  // handleUserNameChange = (e) => {
  //   console.log(e.target.type);
  //   this.setState({
  //     username: e.target.value,
  //     isRender: false,
  //   });
  // };

  // handleEmailChange = (e) => {
  //   this.setState({
  //     email: e.target.value,
  //     isRender: false,
  //   });
  // };

  // handleNumberChange = (e) => {
  //   this.setState({
  //     number: e.target.value,
  //     isRender: false,
  //   });
  // };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      isRender: true,
      numberChange: this.state.number,
      nameChange: this.state.username,
      emailChange: this.state.email,

      username: "",
      email: "",
      number: "",
    });
  };

  render() {
    return (
      <div>
        <Counter />
        <Users />

        {this.state.isRender ? (
          <>
            <p>{this.state.numberChange}</p>
            <p>{this.state.nameChange}</p>
            <p>{this.state.emailChange}</p>
          </>
        ) : (
          ""
        )}

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            id="username"
            value={this.state.username}
            placeholder="Enter username"
            onChange={this.handleChange}
          />
          <input
            type="email"
            id="email"
            value={this.state.email}
            placeholder="Enter email"
            onChange={this.handleChange}
          />
          <input
            type="number"
            value={this.state.number}
            id="number"
            placeholder="Enter Number"
            onChange={this.handleChange}
          />

          <input type="submit" />
        </form>
        {/* 
        {this.state.isTrue ? (
          <div>Condition True</div>
        ) : (
          <div>Condition False</div>
        )} */}
      </div>
    );
  }
}

export default App;
