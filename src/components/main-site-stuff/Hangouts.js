import React, { Component } from 'react';
import Radium from 'radium';
import { styles } from '../../Styles'

class Hangouts extends Component {
    render(){
        return (
            <button style={styles.button}>
                show ma hangoutss
            </button>
        )
    }
}

export default Radium(Hangouts)