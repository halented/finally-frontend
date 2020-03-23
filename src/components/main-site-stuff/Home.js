import React, { Component } from 'react';
import Radium from 'radium';
import Form from './Form';
import { IntrovertLink } from './IntrovertLink';

import { styles } from '../../Styles'

class Home extends Component {
    state= {
        topFriends: [],
        allIntroverts: [],
        allPurposes: ["yep", "temporary"],
        showForm: false,
        formType: 'none'
    }

    componentDidMount(){
        fetch(`http://localhost:3000/users/${parseInt(localStorage.getItem('userId'))}`)
        .then(res => res.json())
        .then(json=> {
            let temp = json.introverts.slice(0,3)
            this.setState({topFriends: temp, allIntroverts: json.introverts})
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
            .then(json=>console.log("gotta do some front end feedback here to prove you saved it"))
    }

    saveHangout = (ev) => {
        ev.preventDefault()
        console.log(ev.target)
        console.log("you're sure saving that hangout")
    }

    render(){
        return (
            <div style={styles.homeBase}>
                <div style={styles.topFriendsDiv}>{this.setPics()}</div>
                <div style={styles.buttonHolder}>
                    {this.state.showForm === true?
                        <Form trait={this.state.formType} saveIntrovert={this.saveIntrovert} changeShow={this.changeShow} introverts={this.state.allIntroverts} purposes={this.state.allPurposes}/>
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