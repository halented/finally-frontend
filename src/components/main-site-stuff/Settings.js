import React, { Component } from 'react';
import { styles, changeApp } from '../../Styles';

class Settings extends Component {
    logout = () => {
        if(window.confirm("Are you sure you'd like to logout?")){
            localStorage.clear()
            window.location.replace(`http://localhost:3001/#/`)
        }
    }
    lightsOn = () => {
        console.log(changeApp)
    }
    render(){
        return (
            <div style={styles.settings}>
                <button onClick={this.logout}>
                    Logout
                </button>
                <button onClick={()=>console.log("this button is a lie")}>
                    Personal Info
                </button>
                <button onClick={this.lightsOn}>
                    Lights On
                </button>
                <button onClick={this.logout}>
                    Surely you needed another button
                </button>
            </div>

        )
    }
}

export default Settings