import React from 'react';
import { Link } from 'react-router-dom'
import { styles } from '../../Styles'
import bear from '../../images/bear.png'
import bull from '../../images/bull.png'
import bun from '../../images/bun.png'
import dog from '../../images/dog.png'
import flam from '../../images/flam.png'
import koala from '../../images/koala.png'
import fallback from '../../images/octi.png'
// test interpolating string from backend into local URL


export const IntrovertLink = (props) => {
    switch(props.int.img_ref){
        case 'bear':
            return  <Link to={`/introverts/${props.int.id}`}><img src={bear} alt={props.int.name} style={styles.friendCircle}/> </Link>
        case 'bull':
            return <Link to={`/introverts/${props.int.id}`}><img src={bull} alt={props.int.name} style={styles.friendCircle}/></Link>
        case 'bun':
            return <Link to={`/introverts/${props.int.id}`}><img src={bun} alt={props.int.name} style={styles.friendCircle}/></Link>
        case 'dog':
            return <Link to={`/introverts/${props.int.id}`}><img src={dog} alt={props.int.name} style={styles.friendCircle}/></Link>
        case 'flam':
            return <Link to={`/introverts/${props.int.id}`}><img src={flam} alt={props.int.name} style={styles.friendCircle}/></Link>
        case 'koala':
            return <Link to={`/introverts/${props.int.id}`}><img src={koala} alt={props.int.name} style={styles.friendCircle}/></Link>
        default:
            return <Link to={`/introverts/${props.int.id}`}><img src={fallback} alt={props.int.name} style={styles.friendCircle}/></Link>
    }
}