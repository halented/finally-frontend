import React from 'react';
import { NavLink } from 'react-router-dom'


export default function Landing (props){
        return (
            <>
                <div className='App'>
                    <div className="flipCard">
                        <div className="flipCardInner">
                        <div className='flipBoxFront'>
                        <span id='finally'>FINALLY! </span>AN APP FOR EXTROVERTS
                        </div>
                        <div className="flipBoxBack" onClick={()=>props.changeShow('signup')}>
                            CLICK HERE TO GET STARTED
                        </div>
                        </div>
                    </div>
                    <p className='infoLinks'> 
                        <span><NavLink to='about'> About</NavLink> |</span>
                        <span> <b onClick={()=>window.open('https://github.com/halented/finally-frontend')}>Github</b> | </span>
                        <span><NavLink to='author'> Author</NavLink></span> 
                    </p>
                </div>
            </>
        )
}
