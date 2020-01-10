import React from 'react';
import { NavLink } from 'react-router-dom';
import Radium from 'radium';
import icon from '../../images/icon.png'


var styles = {
    base: {
        border: '1px solid black',
        padding: '5px',
        color: 'lightblue',
        MozBoxShadow: '0 0 10px #000000',
        'WebkitBoxShadow': '0 0 10px #000000',
        boxShadow: '0 0 10px #000000',
        flexDirection: 'row',
        display: 'flex',
    },
    linkBox: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '25%'
    },
    indicator: {
        display: 'flex',
        position: 'fixed',
        right: '25%',
        alignSelf: 'center',
        fontSize: 'larger',
        boxShadow: '0 0 12px 6px lightgrey, 0 0 20px 12px rgb(235, 214, 214), 0 0 28px 18px #0ff',
        backgroundColor: 'rgb(235, 214, 214)',
        borderRadius: '50%',
        color: 'lightblue',
        maxWidth: '7%'
    }
}

class Navbar extends React.Component{

    render(){
        return (
         <div key='1' style={styles.base}>
            <div style={styles.linkBox}>
                <NavLink 
                    exact to='/home' 
                    className='infoLinks'
                    activeStyle={{fontWeight: 'bold'}}>
                    Home
                </NavLink>
                <NavLink 
                    exact to='/introverts' 
                    className='infoLinks' 
                    activeStyle={{fontWeight: 'bold'}}>
                    Introverts
                </NavLink>
                <NavLink 
                    exact to='/hangouts' 
                    className='infoLinks'
                    activeStyle={{fontWeight: 'bold'}}>
                    Hangouts
                </NavLink>
                <NavLink 
                    exact to='/metrics' 
                    className='infoLinks'
                    activeStyle={{fontWeight: 'bold'}}>
                    Metrics
                </NavLink>
                <NavLink 
                    exact to='/settings' 
                    className='infoLinks'
                    activeStyle={{fontWeight: 'bold'}}>
                    Settings
                </NavLink>
             </div>
            <img style={styles.indicator} src={icon} alt='finally app logo'></img>
         </div> 
        )
    }

}

export default Radium(Navbar)