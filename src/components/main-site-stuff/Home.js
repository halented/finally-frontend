import React, { Component } from 'react';
import Radium from 'radium';
import { styles } from '../../Styles'

class PageCard extends Component {
    render(){
        return (
            <button style={styles.button}>
                f o r t i f y
            </button>
        )
    }
}

export default Radium(PageCard)