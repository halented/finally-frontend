import React, { Component } from 'react';
import Radium from 'radium';
import { styles } from '../../Styles'

class Home extends Component {
    render(){
        return (
            <button style={styles.button}>
                h o m e
            </button>
        )
    }
}

export default Radium(Home)