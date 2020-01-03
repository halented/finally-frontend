import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from 'react-router-dom'
import './App.css';

import Signup from './components/Signup'

class App extends Component {

  state = {
    show: "preshow"
  }

  changeShow = (type) => {
    this.setState({show: type})
  }

  conditionalRender = () => {
    if(localStorage.getItem('token')){
      return <div className='App'>idk</div>
    }
    else {
      switch(this.state.show) {
        case "loggedIn":
          return <div className='App'>idk</div>
          break;
  
        case "preshow":
          return (
            <>
              <div className="App">
                <div className="flipCard">
                  <div className="flipCardInner">
                    <div className='flipBoxFront'>
                    <span id='finally'>FINALLY! </span>AN APP FOR EXTROVERTS
                    </div>
                    <div className="flipBoxBack" onClick={()=>this.changeShow('signup')}>
                      CLICK HERE TO GET STARTED
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
          break;
  
        case "signup":
          return <Signup login={this.changeShow}/>
          break;
  
  
        default:
          return <div className='App'>l o a d i n g . . .</div>
      }
    }
  }

  render(){
    return this.conditionalRender()
  }
}

export default App;
