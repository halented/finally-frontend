import React, { useState, useEffect } from 'react';

import { styles } from '../../Styles'
import { services } from '../../apiServices'

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

const hangBoxStyle = Object.assign({}, styles.hangBox, styles.shadowed)
const outerHangStyle = Object.assign({}, styles.outerHangBox, styles.columnFlexbox)
const h3Style = Object.assign({width: '75%'}, styles.shadowed)

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
        return (
            // give it the key of the hangout id in case we want it later
            <div style={hangBoxStyle} key={hang[key][2]}>
                On {date[1]} {date[2]}, {date[0]}, you and {hang[key][0]} participated in {key}.
            </div>
        )
        })
    }
        return (
            <div style={outerHangStyle}>
                <h3 style={h3Style}>Previous Hangouts</h3>
                {displayHangs()}
            </div>
        )
}

export default Hangouts