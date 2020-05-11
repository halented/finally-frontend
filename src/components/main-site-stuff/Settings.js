import React, { Component } from 'react';
import { styles, changeapp } from '../../Styles';

class Settings extends Component {
    logout = () => {
        if(window.confirm("Are you sure you'd like to logout?")){
            localStorage.clear()
            window.location.replace(`http://localhost:3001/#/`)
        }
    }
    lightsOn = () => {

    }
    render(){
        return (
            <div style={styles.settings}>
                <button onClick={this.logout}>
                    Logout
                </button>
                <button>
                    Personal Info
                </button>
                <button onClick={this.lightsOn}>
                    Lights On
                </button>
                <button onClick={this.logout}>
                    Logout
                </button>
            </div>

        )
    }
}

export default Settings