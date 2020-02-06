import React from 'react';
import Radium from 'radium';
import { NavLink } from 'react-router-dom'
import { styles } from '../../Styles'

function Landing (props){
        return (
            <>
                <div className='App'>
                    <div style={styles.flipCard} key='flipCard'>
                        <div style={styles.flipCardInner} key='flipCardInner'>
                        <div style={styles.flipBoxFront}>
                        <span id='finally'>FINALLY! </span>AN APP FOR EXTROVERTS
                        </div>
                        <div style={styles.flipBoxBack} onClick={()=>props.changeShow('signup')}>
                            CLICK HERE TO GET STARTED
                        </div>
                        </div>
                    </div>
                    <p> 
                        <span><NavLink to='about' className='infoLinks'> About</NavLink> |</span>
                        <span> <b onClick={()=>window.open('https://github.com/halented/finally-frontend')} className='infoLinks'>Github</b> | </span>
                        <span><NavLink to='author' className='infoLinks'> Author</NavLink></span> 
                    </p>
                </div>
            </>
        )
}

export default Radium(Landing)
