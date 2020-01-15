import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom'
import Radium from 'radium';
import Form from './Form'
import Navbar from '../pre-site-stuff/Navbar'
import Introverts from './Introverts'
import Hangouts from './Hangouts'
import Metrics from './Metrics'
import Settings from './Settings'

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
                        return <img src={bear} alt={int.name} style={thisStyle.friendCircle} key={int.id} onClick={()=>window.location=`/introverts/${int.id}`}/>
                    case 'bull':
                        return <img src={bull} alt={int.name} style={thisStyle.friendCircle} key={int.id} onClick={()=>window.location=`/introverts/${int.id}`}/>
                    case 'bun':
                        return <img src={bun} alt={int.name} style={thisStyle.friendCircle} key={int.id} onClick={()=>window.location=`/introverts/${int.id}`}/>
                    case 'dog':
                        return <img src={dog} alt={int.name} style={thisStyle.friendCircle} key={int.id} onClick={()=>window.location=`/introverts/${int.id}`}/>
                    case 'flam':
                        return <img src={flam} alt={int.name} style={thisStyle.friendCircle} key={int.id} onClick={()=>window.location=`/introverts/${int.id}`}/>
                    case 'koala':
                        return <img src={koala} alt={int.name} style={thisStyle.friendCircle} key={int.id} onClick={()=>window.location=`/introverts/${int.id}`}/>
                    default:
                        return <img src={fallback} alt={int.name} style={thisStyle.friendCircle} key={int.id} onClick={()=>window.location=`/introverts/${int.id}`}/>
                }
                // return <img src={eval(int.img_ref)} alt={int.name} style={thisStyle.friendCircle} key={int.id} onClick={()=>window.location=`/introverts/${int.id}`}/>
                // stating that fallback is not defined after it is evaluated. maybe async issue?
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
        let postData = JSON.stringify({introvert: {name: ev.target.name.value, activity: ev.target.activity.value, img_ref: 'default', on_cooldown: false}})
        console.log(postData)
        console.log( "and specifically the name:", postData.name)
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
            <Router>
                <div className='App'>
                    <Navbar />
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
                </div>
                <Route exact path='/introverts' component={Introverts}/>
            </Router>
        )
    }
}

export default Radium(Home)


                {/* <Switch>
                    <Route exact path='/home' component={Home}/>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/introverts' component={Introverts}/>
                    <Route exact path='/hangouts' component={Hangouts}/>
                    <Route exact path='/metrics' component={Metrics}/>
                    <Route exact path='/settings' component={Settings}/>
                </Switch> */}