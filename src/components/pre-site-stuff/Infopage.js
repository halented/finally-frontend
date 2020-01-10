import React from 'react';
import { NavLink } from 'react-router-dom';
import icon from '../../images/icon.png';
import me from '../../images/circleMe.png';
import Radium from 'radium';

var thisStyle = {
    base: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    block: {
        margin: '15vh',
        width: '80vw'
    }
}

function Infopage(props){
    return (
     <div className='App' style={thisStyle.base}>
         <div>
            {props.trait === 'about' ?
                <div style={thisStyle.block}>
                    <img src={icon} className='infoIcon' alt='Finally! App Icon'/>
                    <b style={{fontSize: 'larger'}}><span style={{fontWeight: 'bold'}}>FINALLY!</span> AN APP FOR EXTROVERTS </b>
                    was born out of a passion for quiet time and a cultural misunderstanding of introverts' needs. Introvert voices are frequently silenced or ignored in group settings such as the workplace, friend groups, basketball teams, bookclubs -- anywhere there's an extrovert speaking, there's an introvert thinking. This app is meant to point the arrow away from telling introverts to change their nature, and instead asking extroverts to think about how their actions are affecting their introverted friends. If you like this app, <a href='http://halented.com' style={{color: 'lightblue'}}>hire me!</a>
                </div>
            :
                <div style={thisStyle.block}>
                    <img src={me} className='infoIcon' alt='app creator, hal dunn'/>
                    <span style={{fontWeight: 'bold', fontSize: 'larger'}}>Hal</span> (she/they) is a proud introvert and developer who is seeking a workplace they can call home. They are a driven individual, loving dog parent, devoted partner, and currently in training to compete at the world's strongest man competition in 2021. She is able to complete one pushup so far. Luckily, they are much more adept at programming than lifting. If you are interested in hiring her, please send a message to <span style={{fontWeight: 'bold'}}>heyHal@halented.com</span> or message them on <a href='https://linkedin.com/in/halented' style={{color: 'lightblue'}}>LinkedIn</a>.
                </div>
            }
         </div>
        <p> 
            <span><NavLink to='about' className='infoLinks'> About</NavLink> |</span>
            <span> <b onClick={()=>window.open('https://github.com/halented/finally-frontend')} className='infoLinks'>Github</b> | </span>
            <span><NavLink to='author' className='infoLinks'> Author</NavLink> |</span>
            <span><NavLink to='/' className='infoLinks'> Go Back</NavLink></span>
        </p>
     </div> 
    )
}

export default Radium(Infopage)