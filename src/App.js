import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import profile from './profile.jpg';
import border from './border.png';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={profile} className="App-logo-right" alt="profile" />
          <h1 className="App-title">Resume-Demo</h1>
        </header>
        {/* <p className="App-intro">
        </p> 
       <div className="container">
        <h1></h1>
         
      </div> */}
      <div id="test" className="col-md-4">
      </div>
       
        
        
      </div>
    );
  }
}

export default App;
