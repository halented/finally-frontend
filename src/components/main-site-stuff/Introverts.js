import React, { Component } from 'react';
import { IntrovertLink } from './IntrovertLink';
import { services } from '../../apiServices'
import { styles } from '../../Styles';

const h3Style = Object.assign({width: '75%'}, styles.shadowed)
const boxyStyle = Object.assign({padding: '5%'}, styles.columnFlexbox)


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
            <div style={boxyStyle}>
                <h3 style={h3Style}>All Your Introverts</h3>
                {this.state.introvs.length>0 ? 
                this.state.introvs.map(int=>{
                    return (
                        <div style={styles.columnFlexbox} key={int.id}>
                            <span>{int.name}</span>
                            <IntrovertLink int={int} style={{maxHeight: '10%'}} />
                        </div>
                    )
                    // eventually add a hover style that displays the introvert's name
                }) 
                :
                <div>No Introverts Added Yet!</div>
            }
            </div>
        )
    }
}

export default Introverts