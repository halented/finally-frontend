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

    const [ show, alterShow ] = useState(false)

    function setHangouts(){
        services.fetchData()
        .then(json=>{
            alterHangouts(json.hangouts)
        })
    }

    function showModal(hang){
        !!hang ? alterShow(true) : alterShow(hang)

        // once the click event fires, we would want to change something in state which conditionally renders the modal.
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
            <div style={hangBoxStyle} key={hang[key][2]} onClick={()=>showModal(hang)}>
                On {date[1]} {date[2]}, {date[0]}, you and {hang[key][0]} participated in {key}.
            </div>
        )
        })
    }

        return (
            <div style={outerHangStyle}>
                {show ? 
                    <div style={styles.fuzzed}>
                        <div style={styles.modalContent}>
                            <span style={styles.closeModal} onClick={()=>showModal(false)}>&times;</span>
                            <div>Hangout info</div>
                        </div>
                    </div> 
                : null}
                
                <h3 style={h3Style}>Previous Hangouts</h3>
                {displayHangs()}
            </div>
        )
}

export default Hangouts