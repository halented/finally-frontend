import React, { Component } from 'react';
import Radium from 'radium';
import Form from './Form'
import { styles } from '../../Styles'
import bear from '../../images/bear.png'
import bull from '../../images/bull.png'
import bun from '../../images/bun.png'
import dog from '../../images/dog.png'
import flam from '../../images/flam.png'
import koala from '../../images/koala.png'
import fallback from '../../images/octi.png'


const thisStyle = {
    base: {
        height: '80vh',
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gridTemplateRows: 'repeat(5, 1fr)'
    },
    topFriendsDiv: {
        display: 'flex',
        margin: 'auto',
        gridArea: '1 / 1 / 4 / 6',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    friendCircle: {
        maxWidth: '30%'
    },
    buttonHolder: {
        gridArea: '4 / 1 / 6 / 6',
        display: 'flex',
        justifyContent: 'space-around'
    }
}

class Home extends Component {
    state= {
        topFriends: [],
        showForm: false,
        formType: 'none'
    }

    componentDidMount(){
        fetch(`http://localhost:3000/users/${parseInt(localStorage.getItem('userId'))}`)
        .then(res => res.json())
        .then(json=> {
            let temp = json.introverts.slice(0,3)
            this.setState({topFriends: temp})
        })
    }
    // there must be a dryer way to do this
    setPics = () => {
        if(this.state.topFriends.length > 0){
            return this.state.topFriends.map(int=>{
                switch(int.img_ref){
                    case 'bear':
                        return <img src={bear} alt={int.name} style={thisStyle.friendCircle}/>
                    case 'bull':
                        return <img src={bull} alt={int.name} style={thisStyle.friendCircle}/>
                    case 'bun':
                        return <img src={bun} alt={int.name} style={thisStyle.friendCircle}/>
                    case 'dog':
                        return <img src={dog} alt={int.name} style={thisStyle.friendCircle}/>
                    case 'flam':
                        return <img src={flam} alt={int.name} style={thisStyle.friendCircle}/>
                    case 'koala':
                        return <img src={koala} alt={int.name} style={thisStyle.friendCircle}/>
                    default:
                        return <img src={fallback} alt={int.name} style={thisStyle.friendCircle}/>
                }
            })
        }
        else {
            return <div>No Introverts Added Yet!</div>
        }
    }
    changeShow = (trait) => {
        this.setState({showForm: true, formType: trait})
    }

    saveIntrovert = (ev) => {
        ev.preventDefault()
        let postData = {name: ev.target.name.value, activity: ev.target.activity.value, img_ref: 'default', on_cooldown: false}
        fetch('http://localhost:3000/introverts', {
            method: 'POST',
            headers: {
                'Content Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${localStorage.getItem('token')}`
                // failed to fetch on window, invalid name. likely an error with the authorization and bearer token.
            },
            body: JSON.stringify(postData)
        })
        .then(res=>res.json())
        .then(console.log)
    }

    render(){
        return (
            <div style={thisStyle.base}>
                <div style={thisStyle.topFriendsDiv}>{this.setPics()}</div>
                <div style={thisStyle.buttonHolder}>
                    {this.state.showForm === true?
                        <Form trait={this.state.formType} saveIntrovert={this.saveIntrovert}/>
                        // render form component based on which element was clicked
                        :
                        <>
                            <button style={styles.button} onClick={()=>this.changeShow('introvert')}>
                            Add New Introvert!
                            </button>
                            <button style={styles.button} onClick={()=>this.changeShow('hangout')}>
                                Add New Hangout!
                            </button>
                        </>
                    }
                </div>
            </div>
        )
    }
}

export default Radium(Home)