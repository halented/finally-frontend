import React, { Component } from 'react';
import icon from '../../images/icon.png';
import { styles } from '../../Styles';
import Radium from 'radium';
import { services } from '../../apiServices'


class Signup extends Component {

    state = {
        username: '',
        email: '',
        password: '',
        isDisabled: true
    }
// the function below should probably be in app
    signUpOrIn = (ev) => {
        ev.preventDefault()
        let postData = {email: this.state.email, username: this.state.username, password: this.state.password}
        
        services.signIn(postData)
        .then(json=> {
            if(!!json.user){
                localStorage.setItem("token", json.token)
                localStorage.setItem("userId", json.user.id)
                this.props.login('loggedIn', json.user.introverts)
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
            this.setState({isDisabled: false})

        }
        else {
            this.setState({isDisabled: true})
        }
    }

    render(){
        return (
            <div className='App' style={styles.signUpBase}>
                <img src={icon} style={styles.signUpImg} alt='Finally! App Icon'></img>
                ENTER DETAILS BELOW
                <form onSubmit={(ev)=>{this.signUpOrIn(ev)}} style={styles.signUpForm}>
                    <input 
                        placeholder='email' 
                        name='email' 
                        onChange={(ev)=>{this.handleChange(ev)}}
                        style={styles.signUpInput} 
                    />
                    <input 
                        placeholder='username' 
                        name='username' 
                        onChange={(ev)=>{this.handleChange(ev)}}
                        style={styles.signUpInput} 
                    />
                    <input 
                        placeholder='password' 
                        name='password' type='password' 
                        onChange={(ev)=>{this.handleChange(ev)}}
                        style={styles.signUpInput} 
                    />
                    { this.state.isDisabled ?
                        <button type='submit' disabled={this.state.isDisabled} style={styles.disabled}>SUBMIT</button>
                    :
                        <button type='submit' disabled={this.state.isDisabled}>SUBMIT</button>
                    }
                    
                </form>
            </div>
        )
    }
}

export default Radium(Signup)