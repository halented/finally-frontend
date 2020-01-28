import React from 'react';
import { Link } from 'react-router-dom'
import bear from '../../images/bear.png'
import bull from '../../images/bull.png'
import bun from '../../images/bun.png'
import dog from '../../images/dog.png'
import flam from '../../images/flam.png'
import koala from '../../images/koala.png'
import fallback from '../../images/octi.png'

const thisStyle = {
    friendCircle: {
        maxWidth: '70%'
    }
}

export const IntrovertLink = (props) => {
    switch(props.int.img_ref){
        case 'bear':
            return  <Link to={`introverts/${props.int.id}`} key={props.int.id}><img src={bear} alt={props.int.name} style={thisStyle.friendCircle} key={props.int.id}/> </Link>
        case 'bull':
            return <Link to={`introverts/${props.int.id}`} key={props.int.id}><img src={bull} alt={props.int.name} style={thisStyle.friendCircle} key={props.int.id}/></Link>
        case 'bun':
            return <Link to={`introverts/${props.int.id}`} key={props.int.id}><img src={bun} alt={props.int.name} style={thisStyle.friendCircle} key={props.int.id}/></Link>
        case 'dog':
            return <Link to={`introverts/${props.int.id}`} key={props.int.id}><img src={dog} alt={props.int.name} style={thisStyle.friendCircle} key={props.int.id}/></Link>
        case 'flam':
            return <Link to={`introverts/${props.int.id}`} key={props.int.id}><img src={flam} alt={props.int.name} style={thisStyle.friendCircle} key={props.int.id}/></Link>
        case 'koala':
            return <Link to={`introverts/${props.int.id}`} key={props.int.id}><img src={koala} alt={props.int.name} style={thisStyle.friendCircle} key={props.int.id}/></Link>
        default:
            return <Link to={`introverts/${props.int.id}`} key={props.int.id}><img src={fallback} alt={props.int.name} style={thisStyle.friendCircle} key={props.int.id}/></Link>
    }
}