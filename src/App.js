import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom'
import './App.css';

import Signup from './components/Signup'

class App extends Component {

  state = {
    showSignUp: true
  }

  makeSignUpTrue = () => {
    this.setState({showSignUp: true})
  }
  render(){
    return (
      <>
        {this.state.showSignUp ? 
          <Signup />
          :
          <div className="App">
            <div className="flipCard">
              <div className="flipCardInner">
                <div className='flipBoxFront'>
                <span id='finally'>FINALLY! </span>AN APP FOR EXTROVERTS
                </div>
                <div className="flipBoxBack" onClick={this.makeSignUpTrue}>
                  CLICK HERE TO GET STARTED
                </div>
              </div>
            </div>
          </div>
          }
      </>
    );
  }
}

export default App;
