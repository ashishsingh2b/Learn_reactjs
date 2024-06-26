import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Student from "./Student";
import Employee from "./employee";
// let e1 = <h1>Hello Ashsihs</h1>;
// ReactDOM.render(e1,document.getElementById("root"))

// ReactDOM.render(<App />,document.getElementById("root"));
ReactDOM.render(<Student name="Ashish"/>, document.getElementById("root"));
ReactDOM.render(<Employee/>,document.getElementById("root"));