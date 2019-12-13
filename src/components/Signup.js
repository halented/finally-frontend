import React, { Component } from 'react'
import icon from '../images/icon.png'


export default class Signup extends Component {

    state = {
        username: '',
        email: '',
        password: '',
        isDisabled: true
    }

    signUpOrIn = (ev) => {
        ev.preventDefault()
        let postData = {email: this.state.email, username: this.state.username, password: this.state.password}
        // fetch("http://localhost:3000/auth", {
        //     method: 'POST',
        //     headers: {
        //         Application: 'application/json',
        //         "Content-Type": 'application/json'
        //     }
        // })
        console.log("submitted")
    }

    handleChange = (ev) => {
        // validates that all fields have content
        const inputs = document.getElementsByTagName('input')
        if(inputs.email.value && inputs.username.value && inputs.password.value){
            this.setState({[ev.target.name]: ev.target.value, isDisabled: false})
            let btn = document.getElementsByTagName('button')[0]
            btn.className=''
        }
        else {
            this.setState({[ev.target.name]: ev.target.value})
            console.log()
        }
    }
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
                    <button type='submit' disabled={this.state.isDisabled} className='disabled'>SUBMIT</button>
                    <br/>
                </form>
            </div>
        )
    }
}