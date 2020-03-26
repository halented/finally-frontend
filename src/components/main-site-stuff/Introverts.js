import React, { Component } from 'react';
import { IntrovertLink } from './IntrovertLink';
import { services } from '../../apiServices'


class Introverts extends Component {
    state = {
        introvs: []
    }

    componentDidMount(){
        services.fetchData()
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

export default Introverts