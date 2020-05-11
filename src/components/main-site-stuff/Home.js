import React, { Component } from 'react';
import Radium from 'radium';
import Form from './Form';
import { IntrovertLink } from './IntrovertLink';

import { styles } from '../../Styles'
import { services } from '../../apiServices'

class Home extends Component {
    state= {
        topFriends: [],
        allIntroverts: [],
        allPurposes: ["yep", "temporary"],
        showForm: false,
        formType: 'none'
    }

    componentDidMount(){
        services.fetchData()
        .then(json=> {
            let temp = json.introverts.slice(0,3)
            this.setState({topFriends: temp, allIntroverts: json.introverts, allPurposes: json.purposes})
        })
    }

    setPics = () => {
        if(this.state.topFriends.length > 0){
            return this.state.topFriends.map(int=>{
                return (
                    <div style={styles.friendBox}>
                        <span style={styles.friendName}>{int.name}</span>
                        <IntrovertLink int={int} key={int.id}/>
                    </div>
                )
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
        let postData = JSON.stringify({
            introvert: {
                name: ev.target.name.value, 
                activity: ev.target.activity.value, 
                img_ref: 'default', 
                on_cooldown: false
            }
        })
        services.postIntrovert(postData)
        .then(json=>console.log("gotta do some front end feedback here to prove you saved it"))
    }

    saveHangout = (ev) => {
        ev.preventDefault()
        console.log(ev.target)
        let postData = JSON.stringify({
            introvert: ev.target.introvert.value,
            purpose: ev.target.purpose.value
        })
        services.postHangout(postData)
        .then(json=> console.log(json))
    }

    render(){
        return (
            <div style={styles.homeBase}>
                <div style={styles.topFriendsDiv}>{this.setPics()}</div>
                <div style={styles.buttonHolder}>
                    {this.state.showForm === true?
                        <Form 
                            trait={this.state.formType} 
                            saveIntrovert={this.saveIntrovert} 
                            changeShow={this.changeShow} 
                            introverts={this.state.allIntroverts} 
                            purposes={this.state.allPurposes} 
                            saveHangout={this.saveHangout}
                        />
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