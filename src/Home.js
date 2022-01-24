import React, { Component } from "react";
import SectionHeader from "./SectionHeader";

class Home extends Component {
  render() {
    return (
      <>
        <div>
          <SectionHeader
            title="Home Title"
            btn="Home Btn"
            newProp={this.props.x}
          />

          <section>This is Section in Home</section>
        </div>

        <p>This is P</p>
      </>
    );
  }
}

export default Home;
