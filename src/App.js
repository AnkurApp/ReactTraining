// // import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//          npm target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//   </header> */}
//       <h1>First React App</h1>
//       <h2>Changing the branch</h2>
//     </div>
//   );
// }

// export default App;

import React from "react";
// import Home from "./modules/home";
// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Home />
//       </div>
//     );
//   }
// }
// export default App;

import PricingWebpage from "./Assignment1/pricingwebpage";
class App extends React.Component {
  render() {
    return (
      <div>
        <PricingWebpage />
      </div>
    );
  }
}

export default App;
