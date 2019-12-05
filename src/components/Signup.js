import React, { Component } from 'react'

export default class Signup extends Component {
    render(){
        return (
            <div className='App'>
                ENTER DETAILS BELOW
                <form>
                    <input placeholder='email' name='email'></input>
                    <br/>
                    <input placeholder='username' name='username'></input>
                    <br/>
                    <input placeholder='password' name='password' type='password'></input>
                    <br/>
                    <button type='submit'>Submit</button>
                    <br/>
                </form>
            </div>
        )
    }
}