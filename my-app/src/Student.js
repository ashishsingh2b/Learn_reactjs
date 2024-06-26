// import React, {Component} from "react";

// function Student() {
//     return <h1>Hello Ashish</h1>;
// }

// export default Student;


import React, {Component} from "react";

class Student extends Component{
    render() {
        return <h1>Hello {this.props.name}</h1>
    }
}

export default Student;