import React from 'react';
import { NavLink } from 'react-router-dom';
import Radium from 'radium';
import icon from '../../images/icon.png'
import { styles } from '../../Styles'

class Navbar extends React.Component {
    state = {
        links: ['Home', 'Introverts', 'Hangouts', 'Metrics', 'Settings']
    }

    render(){
        return (
         <div key='1' style={styles.navBox}>
            <div style={styles.linkBox}>
                {this.state.links.map(link=>{
                    return (
                        <NavLink 
                            exact to={`/${link.toLowerCase()}`} 
                            className='infoLinks'
                            activeStyle={{fontWeight: 'bold'}}
                            key={link}>
                            {link}
                        </NavLink>
                    )
                })}
             </div>
            <NavLink exact to='/home' style={styles.homeLink} >
                <img style={styles.indicator} src={icon} alt='finally app logo'></img>
            </NavLink>
         </div> 
        )
    }

}

export default Radium(Navbar)