//     import React from "react";

//     // const name= "Ashish";
//     // // const e1=<h1>Hello Rahul{10+30}</h1>
//     // const e1 =<h1>{name}</h1>

//     // // #function
//     // function show(name)  {
//     //   return name;
//     // }

//     // const e1=<h1>Hello {show("Ashish SIngh")}</h1>

//     let user = {
//       firstname : "Ashish Singh"
//     };

//     const e1  = <h1>Hello {user.firstname}</h1>



//     export default e1;

//     EX 2 css

//     import React from "react";
//     import "./App.css";


//     const e1 = <h1 className="bg">Hello</h1>;

//     export default e1;


//     ###          Unmounting    #######//
//     import React, { Component } from 'react'

//     export default class App extends Component {
//         componentDidMount() {
//             console.log("App Mounted");
//         }
//         componentWillUnmount() {
//             console.log("App Unmounted");
//         }
//     render() {
//         return (
//         <div>
//             <h1>Hello App Content</h1>
//         </div>
//         )
//     }
//     }


// import React ,{useState} from 'react'
// function App(){
//     const nameStateVariable = useState("Ashish");
//     const name = nameStateVariable[0];
//     const setName = nameStateVariable[1];
//     const [name,setName] = useState("Ashish");
//     const [roll,setRoll] = useState(101);
//     const handleClick = () => {
//     setName("Bittu");
//     setRoll(105);
// }
//     return <React.Fragment>
//         <h1>Name : {name}</h1>
//         <h1>Roll : {roll}</h1>
//         <button type='button' onClick={handleClick}>Change</button>
//         </React.Fragment>
// }

// export default App;

// import React, { useEffect, useState } from 'react';

// function App() {
//     // State for count (increment)
//     const [count, setCount] = useState(0);
//     // State for count1 (decrement)
//     const [count1, setCount1] = useState(50);

//     // Event handler for increment button
//     const handleIncrement = () => {
//         setCount(count + 1);
//     };

//     // Event handler for decrement button
//     const handleDecrement = () => {
//         setCount1(count1 - 1);
//     };

//     // useEffect with no dependencies will run on every render
//     useEffect(() => {
//         console.log("Use Effect Called");
//         // You can put cleanup code here if needed
//         // For example, return a function that cleans up effects
//         // return () => {
//         //   cleanup code here
//         // };
//     });

//     return (
//         <React.Fragment>
//             {/* Display count and provide button to increment */}
//             <h1>Count up: {count}</h1>
//             <button type='button' onClick={handleIncrement}>Increment</button>

//             {/* Display count1 and provide button to decrement */}
//             <h1>Count Down: {count1}</h1>
//             <button type='button' onClick={handleDecrement}>Decrement</button>
//         </React.Fragment>
//     );
// }

// export default App;


// import React from "react";
// import useCustomCounter from "./custom";
// function App(){
//     const data = useCustomCounter();

//     return (
//         <React.Fragment>
//             <h1>Count up: {data.count}</h1>
//             <button type="button" onClick={data.handleIncrement}>Increment</button>
//         </React.Fragment>
//     );
// }

// // export default App;

// import React from 'react';

// const BookList = ({ books }) => (
//   <ul>
//     {books.map(book => (
//       <li key={book.id}>
//         <div>{book.title}</div>
//         <div>{book.author}</div>
//       </li>
//     ))}
//   </ul>
// );

// const App = () => {
//   const books = [
//     { id: 1, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
//     { id: 2, title: '1984', author: 'George Orwell' },
//     { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
//   ];

//   return (
//     <div>
//       <h1>List of Books</h1>
//       <BookList books={books} />
//     </div>
//   );
// };

// export default App;


//#image

// import React, { Component } from 'react'

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <img src={process.env.PUBLIC_URL + "/img.png"} alt="img" width="300px" />
//       </div>
//     )
//   }
// }


// import React, { Component } from 'react'
// import img from "./img.png"
// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <img src={img} alt="img" width="300px" />
//       </div>
//     )
//   }
// }

// import React, { Component } from 'react'

// export default class App extends Component {
//   render() {
//     const btnStyle = {
//         color:"blue",
//         backgroundColor:"red"
//     };
//     return (
//       <div>
//         <button style={btnStyle}>Button</button>
//       </div>
//     )
//   }
// }


// import React, { Component } from 'react'

// export default class App extends Component {
//   render() {
//     const txt1 = {
//         color: "blue",
//     };
//     // const txt2 = {
//     //     fontSize: "80px"
//     // };
//     return  <h1 style={{...txt1,...{fontSize:"150px"}}}>Hello Ashish</h1>;
//   }
// }

// import React, { Component } from 'react';
// import User from './User'; // Capitalize component names (convention)
// import Guest from './Guest'; // Capitalize component names (convention)

// export default class App extends Component {
//   state = {
//     name: "Rahul",
//     roll: 101
//   }

//   render() {
//     return (
//       <div>
//         <User name={this.state.name} />
//         <User name={this.state.roll} />
//         <Guest name={this.state.name} />
//         <Guest name={this.state.roll} />
//       </div>
//     );
//   }
// }

// import React, { Component } from 'react'
// import App_user from './App_user'
// export default class App extends Component {
//   state = {
//     name : "Rahul"
//   }
//   render() {
//     return (
//       <div>
//         <App_user name={this.state.name}/>
//       </div>
//     )
//   }
// }

// src/App.js

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
