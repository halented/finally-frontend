import React, { Component } from 'react';
import { IntrovertLink } from './IntrovertLink';
import Radium from 'radium';


class Introverts extends Component {
    state = {
        introvs: []
    }

    componentDidMount(){
        fetch(`http://localhost:3000/users/${parseInt(localStorage.getItem('userId'))}`)
        .then(res => res.json())
        .then(json=> {
            this.setState({introvs: json.introverts})
        })
    }
    render(){
        return (
            <div style={{padding: '5%'}}>
                {this.state.introvs.length>0 ? 
                this.state.introvs.map(int=>{
                    return <IntrovertLink int={int} style={{maxHeight: '10%'}} key={int.id}/>
                    // add a hover style that displays the introvert's name
                }) 
                :
                <div>No Introverts Added Yet!</div>
            }
            </div>
        )
    }
}

export default Radium(Introverts)