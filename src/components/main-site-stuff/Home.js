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
    topFriendsDiv: {
        display: 'flex',
        margin: 'auto',
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
        topFriends: ["l o a d i n g"]
    }

    componentDidMount(){
        fetch('http://localhost:3000/users/1')
        .then(res => res.json())
        .then(json=> {
            let temp = json.introverts.slice(0,3)
            this.setState({topFriends: temp})
        })
    }

    render(){
        return (
            <div style={thisStyle.base}>
                <div style={thisStyle.topFriendsDiv}>{
                    this.state.topFriends.map(int=>{
                        return <div>{int.name}</div>
                    })
                }</div>
                <div style={thisStyle.addFriend}>form to add an introvert</div>
                <div style={thisStyle.addHang}>form to add a hangout</div>
            </div>
        )
    }
}

export default Radium(Home)