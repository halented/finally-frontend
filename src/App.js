import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
//  Route, NavLink, Switch, Redirect 
import './App.css';

import Signup from './components/Signup';
import Navbar from './components/Navbar';
import Infopage from './components/Infopage';
import Landing from './components/Landing';


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
            <Router>
              <Switch>
                <Route exact path='/'>
                  <Landing changeShow={this.changeShow}/>
                </Route>
                <Route exact path='/about'>
                  <Infopage trait='about'/>
                </Route>
                <Route exact path='/author'>
                  <Infopage trait='author'/>
                </Route>
              </Switch>
            </Router>
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
