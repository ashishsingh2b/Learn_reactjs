//#class based
// import React, {Component} from "react";

// class Studentbtn extends Component {
//     constructor(props) {
//         super(props);
//         this.state= {
//             name: "Ashish",
//             roll: this.props.roll

//         };
//         //this.hanldeClick = this.hanldeClick.bind(this);
//     }
//     hanldeClick = () => {
//         console.log("Button CLicked",this);
//     };
//     render(){
//         return(
//             <div>
//             <h1>Hello,{this.state.name} Your Roll Number is {this.state.roll}</h1>
//             <button onClick={this.hanldeClick}>Click me</button>
//             </div>
//         )
//     }
// }

// import React from "react";
// function Studentbtn(props) {
//     function handleClick(){
//         console.log("Button Clicked");
//     }
//     return(
//         <div>
//             <h1>Hello {props.name}</h1>
//             <button onClick={handleClick}>Click Me</button>
//         </div>
//     )
// }

// export default Studentbtn;