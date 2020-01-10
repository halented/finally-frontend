import React, { Component } from 'react';
import Radium from 'radium';
import { styles } from '../../Styles'

class Metrics extends Component {
    render(){
        return (
            <button style={styles.button}>
                MATRACSK
            </button>
        )
    }
}

export default Radium(Metrics)