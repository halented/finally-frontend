import React, { useState, useEffect } from 'react';

import { styles, months } from '../../Styles'
import { services } from '../../apiServices'

const hangBoxStyle = Object.assign({}, styles.hangBox, styles.shadowed, {cursor: 'pointer'})
const outerHangStyle = Object.assign({}, styles.outerHangBox, styles.columnFlexbox)
const h3Style = Object.assign({width: '75%'}, styles.shadowed)

function Hangouts(props){
    const {introverts} = props

    const [ hangouts, alterHangouts ] = useState([])
    useEffect(setHangouts, [])

    const [ filteredHangs, alterFilteredHangs ] = useState(false)
    const [ filterType, alterFilter ] = useState('')

    const [ show, alterShow ] = useState(false)
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
            const hangoutId = hang.hang_id
            const date = hang.date
            const friend = hang.introvert[0]
            const activity = hang.title

        return (
            // give it the key of the hangout id in case we want it later
            <div style={hangBoxStyle} key={hangoutId} onClick={()=>showModal(hangoutId)}>
                {/* kind of awkward, gotta pluck the month from the backend's date and then grab the name from the month array */}
                On {months[date[0]-1]} {date[1]}, {date[2]}, you and {friend} participated in {activity}.
            </div>
        )
        })
    }
    
    function handleSubmit(event){
        alterFilter(event.target.value)
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
                <select id='filter' value={filterType} onChange={handleSubmit}>
                    <option value="" disabled>Select a Friend</option>
                    {introverts.map(int=>{
                        return <option value={int.name} key={int.id}>{int.name}</option>
                    })}
                </select>
                {displayHangs()}
            </div>
        )
}

export default Hangouts