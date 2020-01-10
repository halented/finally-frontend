import React, { Component } from 'react';
import Radium from 'radium';
import { styles } from '../../Styles'

class Introverts extends Component {
    render(){
        return (
            <div style={styles.base}>
                intorgve
            </div>
        )
    }
}

export default Radium(Introverts)