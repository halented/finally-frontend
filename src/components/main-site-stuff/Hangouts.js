import React, { useState, useEffect } from 'react';

import { styles } from '../../Styles'
import { services } from '../../apiServices'

// componentDidMount(){
//     services.fetchData()
//     .then(json=> {
//         this.setState({introvs: json.introverts})
//     })
// } 
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"]

function Hangouts(){
    const [ hangouts, alterHangouts ] = useState([])
    useEffect(setHangouts, [])

    function setHangouts(){
        services.fetchData()
        .then(json=>{
            alterHangouts(json.hangouts)
        })
    }

    function displayHangs(){
        return hangouts.map(hang=>{
            let key = Object.keys(hang)[0]
            let date = hang[key][1].split("-")
            for(let i=0;i<3;i++){
                date[i] = i === 1 ? months[parseInt(date[i])-1] : parseInt(date[i])
            }
            // date = date.map(el=>parseInt(el))
            
            // debugger;
        return (
            <div style={styles.hangBox}>
                On {date[1]} {date[2]}, {date[0]}, you and {hang[key][0]} participated in {key}.
            </div>
        )
        })
    }
        return (
            <div style={styles.outerHangBox}>
                {displayHangs()}
            </div>
        )
}

export default Hangouts