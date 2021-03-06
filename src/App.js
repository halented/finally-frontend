import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import { services } from './apiServices'
import { Signup, Navbar, Infopage, Landing, Home, IntrovertShow, Introverts, Hangouts, Metrics, Settings } from './components/main-site-stuff/ImportCompiler'

class App extends Component {

  state = {
    show: "preshow",
    user: 'none',
    introverts: []
  }

  componentDidMount() {
    console.log("I bet we seee this")
    if (localStorage.getItem('token')) {
      console.log("but not this")
      this.setIntroverts()
    }
  }

  setIntroverts = () => {
    services.fetchData()
      .then(json => {
        console.log("inside app component did mount", json)
        this.setState({ introverts: json.introverts, user: json.user })
      })
  }

  changeShow = (type, introvs = []) => {
    if (type === 'preshow') {
      this.setState({ show: type, introverts: introvs })
    }
    else {
      this.setState({ show: type, introverts: introvs })
    }
  }

  logoutShow = () => {
    this.setState({ show: 'preshow' }, window.location.replace(`http://localhost:3001/#/`))
    // https://finally-app.herokuapp.com/#/
  }

  updateRoutes = (introvs) => {
    this.setState({ introverts: introvs })
  }

  recharge = (int) => {
    int.on_cooldown = false
    services.updateIntrovert(int)
      .then(json => {
        if (json.error) {
          alert(json.error)
        }
      })

  }

  updateUserDetails = (ev, newDetails) => {
    ev.preventDefault()
    services.updatePersonalDetails(newDetails)
      .then(json => {
        this.setState({ user: json.user }, alert("Details Updated"))
      })
  }


  mainApp = () => {
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <Switch>
            {this.state.introverts.map(x => {
              return <Route key={x.id} exact path={`/introverts/${x.id}`} render={props =>
                (<IntrovertShow {...props} int={x} recharge={this.recharge} />)
              } />
            })}
            <Route exact path='/home' render={props =>
              (<Home {...props} introverts={this.state.introverts} updateRoutes={this.updateRoutes} />)} />
            <Route exact path='/' render={props =>
              (<Home {...props} introverts={this.state.introverts} updateRoutes={this.updateRoutes} />)} />
            <Route exact path='/introverts' component={Introverts} />
            <Route exact path='/hangouts' render={props =>
              (<Hangouts {...props} introverts={this.state.introverts} />)} />
            <Route exact path='/metrics' component={Metrics} />
            <Route exact path="/settings" render={props =>
              (<Settings {...props} logoutShow={this.logoutShow} userData={this.state.user} updateUserDetails={this.updateUserDetails} />)} />
          </Switch>
        </div>
      </Router>
    )
  }

  conditionalRender = () => {
    if (localStorage.getItem('token')) {
      return this.mainApp()
    }
    else {
      switch (this.state.show) {
        case "loggedIn":
          return this.mainApp()

        case "preshow":
          return (
            <>
              <Router>
                <Switch>
                  <Route exact path='/'>
                    <Landing changeShow={this.changeShow} />
                  </Route>
                  <Route exact path='/about'>
                    <Infopage trait='about' />
                  </Route>
                  <Route exact path='/author'>
                    <Infopage trait='author' />
                  </Route>
                </Switch>
              </Router>
            </>
          )

        case "signup":
          return <Signup login={this.changeShow} />

        default:
          return <div className='App'>l o a d i n g . . .</div>
      }
    }
  }

  render() {
    return this.conditionalRender()
  }
}

export default App;
