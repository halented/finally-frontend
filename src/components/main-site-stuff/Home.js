import React, { Component } from 'react';
import Radium from 'radium';
// import { styles } from '../../Styles'

const thisStyle = {
    base: {
        height: '100vh',
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gridTemplateRows: 'repeat(5, 1fr)'
    },
    topFriends: {
        gridArea: '1 / 2 / 4 / 6'
    },
    addFriend: {
        gridArea: '4 / 1 / 6 / 4'
    },
    addHang: {
        gridArea: '4 / 4 / 6 / 7'
    }
}

class Home extends Component {
    state= {
        topFriends: []
    }

    componentDidMount(){
        // fetch to grab top 3 introverts
    }

    render(){
        return (
            <div style={thisStyle.base}>
                <div style={thisStyle.topFriends}>Box full of friends</div>
                <div style={thisStyle.addFriend}>form to add a friend</div>
                <div style={thisStyle.addHang}>form to add a hangout</div>
            </div>
        )
    }
}

export default Radium(Home)