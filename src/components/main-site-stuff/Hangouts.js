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

const hangBoxStyle = Object.assign({}, styles.hangBox, styles.shadowed, {cursor: 'pointer'})
const outerHangStyle = Object.assign({}, styles.outerHangBox, styles.columnFlexbox)
const h3Style = Object.assign({width: '75%'}, styles.shadowed)

function Hangouts(){
    const [ hangouts, alterHangouts ] = useState([])
    useEffect(setHangouts, [])

    const [ show, alterShow ] = useState(true)
    const [ oneHang, alterOneHang ] = useState({})

    function setHangouts(){
        services.fetchData()
        .then(json=>{
            alterHangouts(json.hangouts)
        })
    }

    function showModal(id){
        if(!id){
            alterShow(id)
            return
        }
        alterShow(true)
        // fetch hang data
        services.fetchHangout(id)
        .then(json=>alterOneHang(json))
    }

    function displayHangs(){
        return hangouts.map(hang=>{
            let key = Object.keys(hang)[0]
            let date = hang[key][1].split("-")
            let id = hang[key][2]

            for(let i=0;i<3;i++){
                date[i] = i === 1 ? months[parseInt(date[i])-1] : parseInt(date[i])
            }
        return (
            // give it the key of the hangout id in case we want it later
            <div style={hangBoxStyle} key={id} onClick={()=>showModal(id)}>
                On {date[1]} {date[2]}, {date[0]}, you and {hang[key][0]} participated in {key}.
            </div>
        )
        })
    }

        return (
            <div style={outerHangStyle}>
                {show ? 
                    <div style={styles.fuzzed} onClick={()=>showModal(false)}>
                        <div style={styles.modalContent}>
                            <span style={styles.closeModal} onClick={()=>showModal(false)}>&times;</span>
                            {oneHang.hangout? 
                            <div>
                                <span style={{fontWeight: 'bold'}}>Partcipants: </span>
                                <div>{oneHang.hangout.friendship.user.name} (You!),</div>
                                <div>{oneHang.hangout.friendship.introvert.name}</div>
                                <span style={{fontWeight: 'bold'}}>Activity & Equipment: </span>
                                <div>{oneHang.hangout.purpose.title.toUpperCase()}</div>
                                <div>Equipment: {oneHang.hangout.purpose.equipment}</div>
                                <div>Intensity Level: {oneHang.hangout.purpose.intensity}</div>
                            </div>
                            : 
                            <div>l o a d i n g . . .</div>}
                            
                        </div>
                    </div> 
                : null}
                
                <h3 style={h3Style}>Previous Hangouts</h3>
                {displayHangs()}
            </div>
        )
}

export default Hangouts