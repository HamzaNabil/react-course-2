import React, { Component } from "react";
import axios from "axios";

// https://jsonplaceholder.typicode.com/users
class Users extends Component {
  state = {
    loading: null,
    users: [],
    err: null,
  };

  componentDidMount() {
    this.setState({ loading: true });
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
        this.setState({
          loading: false,
          users: res.data,
        });
      })
      .catch((err) => {
        console.log(err.message);
        this.setState({ loading: false, err: err.message });
      });
  }

  render() {
    return (
      <div>
        {this.state.loading ? "Loading ..." : ""}

        {this.state.users.length > 0 ? "Data ..." : ""}

        {this.state.err ? this.state.err : ""}
      </div>
    );
  }
}

export default Users;
