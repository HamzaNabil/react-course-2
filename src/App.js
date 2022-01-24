import React, { Component } from "react";

import Home from "./Home";
import About from "./About";
import Item from "./Item";

import newImg from "./assets/download.png";

/*
  Mounting [ constructor, render, componentDidMount ]
  Updating [ render,  shouldComponentUpdate ,componentDidUpdate ]
  UnMounting [ ComponentWillUnMount ]
*/

class App extends Component {
  state = {
    name: "App Component 2",
    x: 1,
  };

  shouldComponentUpdate(props, nextState) {
    if (this.state.name == nextState.name) {
      return false;
    }
    console.log("shouldComponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  updateData = () => {
    this.setState({
      name: "App Component 4",
    });
  };

  render() {
    console.log("render");
    return (
      <div>
        {this.state.name}

        <button onClick={this.updateData}> update </button>

        <Home x="1" />
        <hr />
        {/* <About /> */}
        {/* {this.state.products.map((p) => {
          return (
            <span>
              {p.title} {p.price}
            </span>
          );
        })} */}
        <img src={newImg} />
        <ul>
          <Item />
        </ul>
      </div>
    );
  }
}

// Function  Component ( StateLess Comp )
// Hooks => state => function component
// function App() {
//   return <div className="app"></div>;
// }

export default App;
