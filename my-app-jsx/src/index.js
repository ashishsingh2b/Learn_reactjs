// // import ReactDOM from "react-dom"
// // import e1 from "./App";
// // // ReactDOM.render(e1, document.getElementById("root"));

// // import React  from "react";
// // import ReactDOM from "react-dom";
// // import Student from "./student";

// // ReactDOM.render(
// //   <Student name="1000" roll='100'   />,document.getElementById("root")
// // );





// // import React from "react";
// // import ReactDOM from "react-dom";
// // import CollageData  from "./studenttype";

// // // ReactDOM.render(
// // //   <CollageData name="100" roll='100' />,document.getElementById("root")
// // // );

// // ReactDOM.render(<CollageData name="Ashish" roll="100">I am a student</CollageData>,document.getElementById("root"));

// import React from "react";
// import ReactDOM  from "react-dom";
// import Studentid from "./studentstate";

// ReactDOM.render(<Studentid roll="10"/>,document.getElementById("root"))

//#button click

// import React from "react";
// import ReactDOM  from "react-dom";
// import Studentbtn from "./studentbutton";

// ReactDOM.render(<Studentbtn roll="200"/> , document.getElementById("root"))


//#####//unmounting//###########

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import StudentUn from "./studentun"; // Renamed to follow JavaScript naming conventions

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

// ReactDOM.render(
//   <React.StrictMode>
//     <StudentUn />
//   </React.StrictMode>,
//   document.getElementById("stu")
// );

// ReactDOM.unmountComponentAtNode(
//     document.getElementById("root")
//   );


// import React from "react";
// import ReactDOM  from "react-dom";
// import App from './App';

// ReactDOM.render(<App />,document.getElementById("root"))

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));



// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Optional: You may have other CSS or stylesheets to import
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
