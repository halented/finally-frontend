import React, { Component } from 'react';
import Radium from 'radium';

var styles = {
    base: {
        backgroundColor: 'rgb(235, 214, 214)',
        color: '#282c34',
        fontFamily: "'Open Sans Condensed', sans-serif",
        fontSize: 'medium',
        borderRadius: '3px',
        boxShadow: '5px 5px #1b1e24',
        margin: '10%'
    }
}

class PageCard extends Component {
    render(){
        return (
            <button style={styles.base}>
                f o r t i f y
            </button>
        )
    }
}

export default Radium(PageCard)