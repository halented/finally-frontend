import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
//  Route, NavLink, Switch, Redirect 
import './App.css';

import Signup from './components/Signup';
import Navbar from './components/Navbar';

class App extends Component {

  state = {
    show: "preshow"
  }

  changeShow = (type) => {
    this.setState({show: type})
  }

  mainApp = () => {
    return (
      <Router>
        <div className='App'>
          <Navbar />
        </div>
      </Router>
    )
  }

  conditionalRender = () => {
    if(localStorage.getItem('token')){
      return this.mainApp()
    }
    else {
      switch(this.state.show) {
        case "loggedIn":
          return this.mainApp()

        case "preshow":
          return (
            <>
              <div className='App'>
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
                  <p className='infoLinks'> 
                    <span><a href='link to about page'> About</a> |</span>
                    <span> <a href='https://github.com/halented/finally-frontend'>Github</a> | </span>
                    <span><a href='link to info on me'> Author</a></span> 
                  </p>
              </div>
            </>
          )

        case "signup":
          return <Signup login={this.changeShow}/>
  
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
