import React, { useState } from 'react';
import { styles } from '../../Styles'
import Radium from 'radium';
import { IntrovertLink } from './IntrovertLink';


function IntrovertShow(props){
    const [ charging, changeCharge ] = useState(false)
    const { name, activity, on_cooldown} = props.int

    const charge = function(){
        changeCharge(true)
        setTimeout(function(){ 
            props.recharge(props.int)
            changeCharge(false)
        }, 3000)
    }


        return (
            <div style={{overflow: 'scroll'}}>
                <div style={{margin: '2%'}}>
                    <IntrovertLink int={props.int}/>
                </div>
                <div style={{fontWeight: 'bold', fontSize: 'xx-large', color: 'lightblue'}}>
                    It's {name.toUpperCase()}!
                </div>
                <div style={styles.columnFlexbox}>
                    {charging ?
                        <div style={styles.pulse}>{name} is charging.....!</div>
                    :
                        <>
                            <span>Recharge activity: {activity}</span>
                            {on_cooldown ? 
                                <button onClick={()=>charge()}>Recharge!</button>
                            :
                            null}
                            <span>{name.toUpperCase()} is currently {
                                on_cooldown ? 
                                    "on cooldown. Check back later to see if you can hangout."
                                    : 
                                    <span>not on cooldown. You can hang <span style={{color: 'lightblue'}}>finally</span> hangout!</span>
                                }
                            </span>
                        </>
                    }
                </div>
            </div>
        )
}

// put more info in here
export default Radium(IntrovertShow)

// REFACTOR THIS PAGE TO ABSTRACT STYLE GUIDES