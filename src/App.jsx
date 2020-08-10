import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BoxComponent from './components/box';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <img src="./images/ironhack-logo.svg" alt="" />
            <img src="./images/menu-top.svg" alt="" />
          </nav>

          <body>
            <div className="landing">
              <h1>
                Say hello to <br /> ReactJS
              </h1>
              <p>
                You will learn a Frontend <br />
                Framework from scratch to <br />
                become a Ninja developer.
              </p>

              <a href="">Awesome!</a>
            </div>

            <div className="white">
              <BoxComponent
                title="Declarative"
                image="/images/icon1.png"
                text="helloooo"
                dateMade={new Date(2005, 4 - 1, 14)}
                utilities={3}
                completed={false}
              />
              <BoxComponent
                title="Components"
                image="/images/icon2.png"
                text="helloooo"
                dateMade={new Date(2005, 4 - 1, 14)}
                utilities={3}
                completed={false}
              />
              <BoxComponent
                title="Single-Way"
                image="/images/icon3.png"
                text="helloooo"
                dateMade={new Date(2005, 4 - 1, 14)}
                utilities={3}
                completed={true}
              />
              <BoxComponent
                title="JSX"
                image="/images/icon4.png"
                text="helloooo"
                dateMade={new Date(2005, 4 - 1, 14)}
                utilities={3}
                completed={false}
              />
            </div>
          </body>
        </header>
      </div>
    );
  }
}

export default App;

// {
/* <img src={logo} className="App-logo" alt="logo" />
          <p>
          //   {/* Edit <code>src/App.js</code> and save to reload. */
// }
//   You will learn a Frontend Framework from scratch to become a Ninja
//   developer.
// </p>
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Awesome!
// </a> */}
