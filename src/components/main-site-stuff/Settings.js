import React, { Component } from 'react';
import { styles, changeApp } from '../../Styles';


const holder = Object.assign({width: '70%', margin: 'auto'}, styles.columnFlexbox, styles.shadowed)

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
            <div style={holder}>
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