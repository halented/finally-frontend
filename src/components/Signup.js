import React, { Component } from 'react'
import icon from '../images/icon.png'


export default class Signup extends Component {

    state = {
        username: '',
        email: '',
        password: '',
        isDisabled: true,
        buttonClass: 'disabled'
    }

    signUpOrIn = (ev) => {
        ev.preventDefault()
        let postData = {email: this.state.email, username: this.state.username, password: this.state.password}
        // fetch to get from users, and if there is no user, .then(fetch post) to users. then post to auth.

        fetch("http://localhost:3000/auth", {
            method: 'POST',
            headers: {
                Application: 'application/json',
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(postData)
        })
        .then(res=>res.json())
        .then(json=> {
            console.log(json)
            if(!!json.user){
                localStorage.setItem("token", json.token)
                this.props.login('loggedIn')
            }
            else {
                alert(json.error)
            }
        })

        // store the JWT token into localStorage, and then fire this.props.login to change what is being rendered by App.
    }
    // it helps to abstract in the fetch, just hand it things like "headers" which is a function that returns the right object

    handleChange = (ev) => {
        this.setState({[ev.target.name]: ev.target.value}, this.validator)
        // second argument for setState is a function to run once the state is set
    }

    validator = () => {
        // ensures that all fields have content
        if(this.state.password && this.state.email && this.state.username){
            this.setState({isDisabled: false, buttonClass: ''})

        }
        else {
            this.setState({isDisabled: true, buttonClass: 'disabled'})
        }
    }
    // refactor function to build button dynamically in a clickable or unclickable way dependent upon the state

    render(){
        return (
            <div className='App'>
                <img src={icon} id='signup-icon' alt='Finally! App Icon'></img>
                ENTER DETAILS BELOW
                <form onSubmit={(ev)=>{this.signUpOrIn(ev)}}>
                    <input placeholder='email' name='email' onChange={(ev)=>{this.handleChange(ev)}}></input>
                    <br/>
                    <input placeholder='username' name='username' onChange={(ev)=>{this.handleChange(ev)}}></input>
                    <br/>
                    <input placeholder='password' name='password' type='password' onChange={(ev)=>{this.handleChange(ev)}}></input>
                    <br/>
                    <button type='submit' disabled={this.state.isDisabled} className={this.state.buttonClass}>SUBMIT</button>
                    <br/>
                </form>
            </div>
        )
    }
}