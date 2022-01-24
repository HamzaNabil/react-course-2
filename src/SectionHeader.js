import React, { Component } from "react";

// Class => this.props
// Function(props) => props.

function SectionHeader(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>This is P</p>
      <button> {props.btn} </button>
      {props.newProp}
    </div>
  );
}

export default SectionHeader;
