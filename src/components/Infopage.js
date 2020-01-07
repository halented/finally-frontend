import React from 'react';
import { NavLink } from 'react-router-dom';
import icon from '../images/icon.png';
import me from '../images/circleMe.png';

export default function Navbar(props){
    return (
     <div className='App'>
         <div>
            {props.trait === 'about'?
                <div>
                    <img src={icon} className='infoIcon'/>
                    <b style={{fontSize: 'larger'}}><span style={{fontWeight: 'bold'}}>FINALLY!</span> AN APP FOR EXTROVERTS </b>
                    was born out of a passion for quiet time and a cultural misunderstanding of introverts' needs. Introvert voices are frequently silenced or ignored in group settings such as the workplace, friend groups, basketball teams, bookclubs -- anywhere there's an extrovert speaking, there's an introvert thinking. This app is meant to point the arrow away from telling introverts to change their nature, and instead asking extroverts to think about how their actions are affecting their introverted friends. If you like this app, <a href='http://halented.com' style={{color: 'lightblue'}}>hire me!</a>
                </div>
            :
                <div>
                    <img src={me} className='infoIcon'/>
                    <span style={{fontWeight: 'bold', fontSize: 'larger'}}>Hal</span> (she/they) is a proud introvert and developer who is seeking a workplace they can call home. They are a driven individual, loving dog parent, devoted partner, and currently in training to compete at the world's strongest man competition in 2021. They are able to complete one pushup so far. Luckily, they are much more adept at programming than lifting. If you are interested in hiring her, please send a message to <span style={{fontWeight: 'bold'}}>heyHal@halented.com</span> or message them on <a href='https://linkedin.com/in/halented' style={{color: 'lightblue'}}>LinkedIn</a>.
                </div>
            }
         </div>
        <p className='infoLinks'> 
            <span><NavLink to='about'> About</NavLink> |</span>
            <span> <b onClick={()=>window.open('https://github.com/halented/finally-frontend')}>Github</b> | </span>
            <span><NavLink to='author'> Author</NavLink> |</span>
            <span><NavLink to='/'> Go Back</NavLink></span>
        </p>
     </div> 
    )
}