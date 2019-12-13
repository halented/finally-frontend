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
        console.log('submitted')

        // fetch("http://localhost:3000/auth", {
        //     method: 'POST',
        //     headers: {
        //         Application: 'application/json',
        //         "Content-Type": 'application/json'
        //     },
        //     body: JSON.stringify(postData)
        // })
        // .then(res=>res.json())
        // .then(console.log)
    }

    handleChange = (ev) => {
        this.setState({[ev.target.name]: ev.target.value}, this.validator)
    }

    validator = () => {
        // validates that all fields have content
        if(this.state.password && this.state.email && this.state.username){
            this.setState({isDisabled: false, buttonClass: ''})

        }
    }
    // refactor to use function to build button dynamically in a clickable or unclickable way dependent upon the state

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