import React, { Component } from 'react';
import Radium from 'radium';
import Form from './Form';
import { IntrovertLink } from './IntrovertLink';

// import { styles } from '../../Styles'


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
        gridArea: '1 / 1 / 3 / 6',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    buttonHolder: {
        gridArea: '3 / 1 / 6 / 6',
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

    setPics = () => {
        if(this.state.topFriends.length > 0){
            return this.state.topFriends.map(int=>{
                return <IntrovertLink int={int} key={int.id}/>
            })
        }
        else {
            return <div>No Introverts Added Yet!</div>
        }
    }
    changeShow = (trait) => {
        let temp = !this.state.showForm
        this.setState({showForm: temp, formType: trait})
    }

    saveIntrovert = (ev) => {
        ev.preventDefault()
        let postData = JSON.stringify({introvert: {name: ev.target.name.value, activity: ev.target.activity.value, img_ref: 'default', on_cooldown: false}})
        fetch('http://localhost:3000/introverts', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json', 
                Accept: 'application/json',
                Authorization: `Bearer: ${localStorage.getItem('token')}`
            },
            body: postData})
            .then(res=>res.json())
            .then(json=>console.log(json))
    }

    render(){
        return (
            <div style={thisStyle.base}>
                <div style={thisStyle.topFriendsDiv}>{this.setPics()}</div>
                <div style={thisStyle.buttonHolder}>
                    {this.state.showForm === true?
                        <Form trait={this.state.formType} saveIntrovert={this.saveIntrovert} changeShow={this.changeShow}/>
                        // render form component based on which element was clicked
                        :
                        <>
                            <button onClick={()=>this.changeShow('introvert')}>
                            Add New Introvert!
                            </button>
                            <button onClick={()=>this.changeShow('hangout')}>
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