import React, { Component } from 'react';
import Radium from 'radium';
import { styles } from '../../Styles'

class IntrovertShow extends Component {
    state = {
        introv: nil
    }

    componentDidMount(){
        fetch('http://localhost:3000/introverts')
        .then(res=>res.json())
        .then(json=>{this.setState({introv: json})})
    }
    render(){
        return (
            <button style={styles.button}>
                this is the introvert show page.
            </button>
        )
    }
}

export default Radium(IntrovertShow)