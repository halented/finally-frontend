import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'


export default class Landing extends Component {
    render(){
        return (
            <>
                <div className='App'>
                    <div className="flipCard">
                        <div className="flipCardInner">
                        <div className='flipBoxFront'>
                        <span id='finally'>FINALLY! </span>AN APP FOR EXTROVERTS
                        </div>
                        <div className="flipBoxBack" onClick={()=>this.props.changeShow('signup')}>
                            CLICK HERE TO GET STARTED
                        </div>
                        </div>
                    </div>
                    <p className='infoLinks'> 
                        <span><NavLink to='about'> About</NavLink> |</span>
                        <span> <a href='https://github.com/halented/finally-frontend'>Github</a> | </span>
                        <span><NavLink to='author'> Author</NavLink></span> 
                    </p>
                </div>
            </>
        )
    }
}
