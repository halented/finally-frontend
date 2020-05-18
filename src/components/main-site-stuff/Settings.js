import React, { Component } from 'react';
import { styles, changeApp } from '../../Styles';

class Settings extends Component {
    logout = () => {
        if(window.confirm("Are you sure you'd like to logout?")){
            localStorage.clear()
            this.props.logoutShow()
        }
    }

    lightsOn = () => {
        console.log(changeApp)
    }
    render(){
        return (
            <div style={styles.columnFlexbox}>
                <button onClick={this.logout}>
                    Logout
                </button>
                <button onClick={()=>console.log("this button is a lie")}>
                    Personal Info
                </button>
                <button onClick={this.lightsOn}>
                    Lights On
                </button>
            </div>

        )
    }
}

export default Settings