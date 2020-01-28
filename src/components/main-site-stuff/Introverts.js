import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Radium from 'radium';
// import { styles } from '../../Styles'
import bear from '../../images/bear.png'
import bull from '../../images/bull.png'
import bun from '../../images/bun.png'
import dog from '../../images/dog.png'
import flam from '../../images/flam.png'
import koala from '../../images/koala.png'
import fallback from '../../images/octi.png'

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
                    return <Link to={`introverts/${int.id}`}><img src={fallback} alt={int.name} key={int.id}/></Link>
                }) 
                :
                <div>No Introverts Added Yet!</div>
            }
            </div>
        )
    }
}

export default Radium(Introverts)