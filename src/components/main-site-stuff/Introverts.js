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
            console.log(json.introverts)
            this.setState({introvs: json.introverts})
        })
    }
    render(){
        return (
            <div>
                {this.state.introvs.length>0 ? 
                this.state.introvs.map(int=>{
                    return <IntrovertLink int={int} />
                }) 
                :
                <div>No Introverts Added Yet!</div>
            }
            </div>
        )
    }
}

export default Radium(Introverts)