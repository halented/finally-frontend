import React, { Component } from 'react';
import Radium from 'radium';
// import { styles } from '../../Styles'

class Home extends Component {
    state= {
        topFriends: []
    }

    componentDidMount(){
        // fetch to grab top 3 introverts
    }

    render(){
        return (
            <div>
                <div>Box full of friends</div>
                <div>form to add a friend</div>
                <div>form to add a hangout</div>
            </div>
        )
    }
}

export default Radium(Home)