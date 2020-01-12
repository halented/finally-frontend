import React, { Component } from 'react';
import icon from '../../images/icon.png';
import { styles } from '../../Styles';
import Radium from 'radium';

var thisStyle = {
    base: {
        justifyContent: 'center'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '30vh',
        alignItems: 'center',
        alignSelf: 'center',
    },
    input: {
        margin: '7.5%'
    },
    img: {
        alignSelf: 'center',
        width: 'calc(70px + 2vmin)',
        marginBottom: '5%'
    }
}

class Signup extends Component {

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
                localStorage.setItem("userId", json.user.id)
                this.props.login('loggedIn')
            }
            else {
                json.error ? alert(json.error) : alert("Something went wrong.")
            }
        }).catch(function() {
            alert("Something went wrong.");
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
    // in the below, change form to flex box and flex direction column see if we can get rid of those messy brs
    render(){
        return (
            <div className='App' style={thisStyle.base}>
                <img src={icon} style={thisStyle.img} alt='Finally! App Icon'></img>
                ENTER DETAILS BELOW
                <form onSubmit={(ev)=>{this.signUpOrIn(ev)}} style={thisStyle.form}>
                    <input 
                        placeholder='email' 
                        name='email' 
                        onChange={(ev)=>{this.handleChange(ev)}}
                        style={thisStyle.input} 
                    />
                    <input 
                        placeholder='username' 
                        name='username' 
                        onChange={(ev)=>{this.handleChange(ev)}}
                        style={thisStyle.input} 
                    />
                    <input 
                        placeholder='password' 
                        name='password' type='password' 
                        onChange={(ev)=>{this.handleChange(ev)}}
                        style={thisStyle.input} 
                    />
                    <button type='submit' disabled={this.state.isDisabled} className={this.state.buttonClass} style={styles.button}>SUBMIT</button>
                </form>
            </div>
        )
    }
}

export default Radium(Signup)