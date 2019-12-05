import React, { Component } from 'react'
import icon from '../images/icon.png'
export default class Signup extends Component {

    signUpOrIn = (ev) => {
        ev.preventDefault()
        fetch("http://localhost:3000/auth", {
            method: 'POST',
            headers: {
                Application: 'application/json',
                "Content-Type": 'application/json'
            }
        })
    }
    render(){
        return (
            <div className='App'>
                <img src={icon} id='signup-icon'></img>
                ENTER DETAILS BELOW
                <form onSubmit={(ev)=>{this.signUpOrIn(ev)}}>
                    <input placeholder='email' name='email'></input>
                    <br/>
                    <input placeholder='username' name='username'></input>
                    <br/>
                    <input placeholder='password' name='password' type='password'></input>
                    <br/>
                    <button type='submit'>SUBMIT</button>
                    <br/>
                </form>
            </div>
        )
    }
}