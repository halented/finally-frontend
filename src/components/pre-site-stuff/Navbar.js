import React from 'react';
import { NavLink } from 'react-router-dom';
import Radium from 'radium';


var styles = {
    base: {
        border: '1px solid black',
        padding: '5px',
        color: 'lightblue',
        MozBoxShadow: '0 0 10px #000000',
        'WebkitBoxShadow': '0 0 10px #000000',
        boxShadow: '0 0 10px #000000',
        display: 'flex',
        flexDirection: 'column',
    }
}

class Navbar extends React.Component{

    render(){
        return (
         <div key='1' style={styles.base}>
            <NavLink to='home' className='infoLinks'>
                Home
            </NavLink>
            <NavLink to='/home' className='infoLinks' >Introverts</NavLink>
            <NavLink to='/home' className='infoLinks' >Hangouts</NavLink>
            <NavLink to='/home' className='infoLinks' >Metrics</NavLink>
            <NavLink to='/home' className='infoLinks' >Settings</NavLink>
         </div> 
        )
    }

}

export default Radium(Navbar)

// var styles = {
//     base: {
//       background: 'blue',
//       border: 0,
//       borderRadius: 4,
//       color: 'white',
//       padding: '1.5em',
  
//       ':hover': {
//         backgroundColor: 'red'
//       },
  
//       ':focus': {
//         backgroundColor: 'green'
//       },
  
//       ':active': {
//         backgroundColor: 'yellow'
//       },
//     },
  
//     block: {
//       display: 'block',
  
//       ':hover': {
//         boxShadow: '0 3px 0 rgba(0,0,0,0.2)'
//       }
//     },
//   };
  
//   class PageCard extends React.Component {
//     render() {
//         return (
//         <div key="1" style={styles.base}>
//             words in first div
//             <div key="2" style={styles.block}>words in second div</div>
//         </div>
//         );
//     }
//   }
  
//   export default Radium(PageCard);