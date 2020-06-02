import React, { Component } from 'react';
import Radium from 'radium';
import Form from './Form';
import { IntrovertLink } from './IntrovertLink';

import { styles } from '../../Styles'
import { services } from '../../apiServices'

const h3Style = Object.assign({width: '75%', alignSelf: 'center'}, styles.shadowed)
const tallerButton = {height: '50%'}



class Home extends Component {
    state= {
        topFriends: [],
        allPurposes: ["yep", "temporary"],
        showForm: false,
        formType: ''
    }

    componentDidMount(){
        services.fetchData()
        .then(json=> {
            let temp = json.introverts.slice(json.introverts.length-3,json.introverts.length)
            this.setState({topFriends: temp, allPurposes: json.purposes})
        })
    }

    setPics = () => {
        if(this.state.topFriends.length > 0){
            return this.state.topFriends.map(int=>{
                return (
                    <div style={styles.columnFlexbox} key={int.id}>
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
        console.log(ev.target.image.value)
        let postData = JSON.stringify({
            introvert: {
                name: ev.target.name.value, 
                activity: ev.target.activity.value, 
                img_ref: ev.target.image.value,
                on_cooldown: false
            }
        })
        services.postIntrovert(postData)
        .then(json=>{
            let replacementInts = [...this.props.introverts]
            replacementInts.push(json.introvert)
            const replacementFriends = replacementInts.slice(replacementInts.length-3,replacementInts.length)
            this.setState({topFriends: replacementFriends}, ()=>{
                this.props.updateRoutes(replacementInts)
                alert("Friendo saved!")
            })
        })
    }

    saveHangout = (ev) => {
        ev.preventDefault()
        let postData = JSON.stringify({
            introvert: ev.target.introvert.value,
            purpose: ev.target.purpose.value
        })
        services.postHangout(postData)
        .then(json=> {
            // use the introvert that comes back from this to update the state of allIntroverts
            if(json.error){
                alert(json.error)
            }
            else {
                // let tempInts = 
                // let ta = [...this.state.allIntroverts]
                const replacementInts = [...this.props.introverts].map(int=>{
                    if (int.id === json.introvert.id){
                        return json.introvert
                    }
                    else return int
                })
                const replacementFriends = replacementInts.slice(replacementInts.length-3,replacementInts.length)
                this.setState({topFriends: replacementFriends}, ()=>{
                    this.props.updateRoutes(replacementInts)
                    alert("Hangout saved!")
                })
                // topFriends needs to be updated as well
            }
        })
    }

    render(){
        return (
            <div style={styles.homeBase}>
                <h3 style={h3Style}>Your Top Introverts</h3> 
                <div style={styles.topFriendsDiv}>{this.setPics()}</div>
                <div style={styles.buttonHolder}>
                    {this.state.showForm === true?
                        <Form 
                            trait={this.state.formType} 
                            saveIntrovert={this.saveIntrovert} 
                            changeShow={this.changeShow} 
                            introverts={this.props.introverts} 
                            purposes={this.state.allPurposes} 
                            saveHangout={this.saveHangout}
                        />
                        // render form component based on which element was clicked
                        :
                        <>
                            <button onClick={()=>this.changeShow('introvert')} style={tallerButton}>
                            Add New Introvert!
                            </button>
                            <button onClick={()=>this.changeShow('hangout')} style={tallerButton}>
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