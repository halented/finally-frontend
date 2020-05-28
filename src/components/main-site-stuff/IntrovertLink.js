import React from 'react';
import { Link } from 'react-router-dom'
import { styles } from '../../Styles'
import bear from '../../images/bear.png'
import bull from '../../images/bull.png'
import bunny from '../../images/bun.png'
import dog from '../../images/dog.png'
import flamingo from '../../images/flam.png'
import koala from '../../images/koala.png'
import octopus from '../../images/octi.png'

const lowOpacityFriend = Object.assign({}, styles.friendCircle, {opacity: '.4'})

export const IntrovertLink = (props) => {
    const {img_ref, on_cooldown} = props.int
    switch(img_ref){
        case 'bear':
            return  <Link to={`/introverts/${props.int.id}`}><img src={bear} alt={props.int.name} style={on_cooldown? lowOpacityFriend :styles.friendCircle}/> </Link>
        case 'bull':
            return <Link to={`/introverts/${props.int.id}`}><img src={bull} alt={props.int.name} style={on_cooldown? lowOpacityFriend :styles.friendCircle}/></Link>
        case 'bunny':
            return <Link to={`/introverts/${props.int.id}`}><img src={bunny} alt={props.int.name} style={on_cooldown? lowOpacityFriend :styles.friendCircle}/></Link>
        case 'dog':
            return <Link to={`/introverts/${props.int.id}`}><img src={dog} alt={props.int.name} style={on_cooldown? lowOpacityFriend :styles.friendCircle}/></Link>
        case 'flamingo':
            return <Link to={`/introverts/${props.int.id}`}><img src={flamingo} alt={props.int.name} style={on_cooldown? lowOpacityFriend :styles.friendCircle}/></Link>
        case 'koala':
            return <Link to={`/introverts/${props.int.id}`}><img src={koala} alt={props.int.name} style={on_cooldown? lowOpacityFriend :styles.friendCircle}/></Link>
        default:
            return <Link to={`/introverts/${props.int.id}`}><img src={octopus} alt={props.int.name} style={on_cooldown? lowOpacityFriend :styles.friendCircle}/></Link>
    }
}