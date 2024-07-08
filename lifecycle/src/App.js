import React, { Component } from "react";
import Student from "./student";

export default class App extends Component {
  constructor(props) {
    super(props);
    console.log("App-Constructor called");
    console.log(props);
    this.state = {
      roll: "100"
    };
  }
  
  static getDerivedStateFromProps(props, state) {
    console.log("Get Derived State From Props");
    console.log(props, state);
    return null; // This method should return an object to update state or null to update nothing
  }

  render() {
    return (
      <div>
        <Student name="Rahul" />
      </div>
    );
  }
}
