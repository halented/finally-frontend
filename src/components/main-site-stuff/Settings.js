import React, { Component } from 'react';
import { styles } from '../../Styles';

class Settings extends Component {
    logout = () => {
        if(window.confirm("Are you sure you'd like to logout?")){
            localStorage.clear()
        }
    }
    render(){
        return (
            <div style={styles.settings}>
                <button style={styles.settingsBtn}>
                    Logout
                </button>
                <button>
                    Personal Info
                </button>
                <button>
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