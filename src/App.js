import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom'
//  NavLink Redirect 
import './App.css';
import Signup from './components/pre-site-stuff/Signup';
import Navbar from './components/pre-site-stuff/Navbar';
import Infopage from './components/pre-site-stuff/Infopage';
import Landing from './components/pre-site-stuff/Landing';
import Home from './components/main-site-stuff/Home'
import Introverts from './components/main-site-stuff/Introverts'
import Hangouts from './components/main-site-stuff/Hangouts'
import Metrics from './components/main-site-stuff/Metrics'
import Settings from './components/main-site-stuff/Settings'



class App extends Component {

  state = {
    show: "preshow",
    user: 'none',
    introverts: []
  }

  componentDidMount(){
    if(localStorage.getItem('token')){
      fetch(`http://localhost:3000/users/${parseInt(localStorage.getItem('userId'))}`)
      .then(res => res.json())
      .then(json=> {
          this.setState({introverts: json.introverts, user: json.user}, console.log("been set! ", this.state.introverts))

      })
    }
  }

  changeShow = (type) => {
    this.setState({show: type})
  }


  mainApp = () => {
    return <Home />
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
