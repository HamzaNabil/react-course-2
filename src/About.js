import React, { Component } from "react";
import SectionHeader from "./SectionHeader";

class About extends Component {
  render() {
    return (
      <div>
        <SectionHeader title="About Title" btn="About Btn" />

        <article>This is Article In About</article>
      </div>
    );
  }
}

export default About;
