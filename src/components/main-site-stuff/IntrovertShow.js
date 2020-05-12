import React from 'react';
import { styles } from '../../Styles'
import Radium from 'radium';
import { IntrovertLink } from './IntrovertLink';


function IntrovertShow(props){
    const { name, activity, on_cooldown} = props.int

        return (
            <>
                <div style={{margin: '2%'}}>
                    <IntrovertLink int={props.int}/>
                </div>
                <div style={{fontWeight: 'bold', fontSize: 'xx-large', color: 'lightblue'}}>
                    It's {name.toUpperCase()}!
                </div>
                <div style={styles.columnFlexbox}>
                    <span>Recharge activity: {activity}</span>
                    {/* add a link for more info on the activity? */}
                    <span>{name.toUpperCase()} is currently {
                        on_cooldown ? 
                            "on cooldown. Check back later to see if you can hangout."
                            : 
                            <span>not on cooldown. You can hang <span style={{color: 'lightblue'}}>finally</span> hangout!</span>
                        }
                    </span>
                </div>
            </>
        )
}

// put more info in here
export default Radium(IntrovertShow)

// REFACTOR THIS PAGE TO ABSTRACT STYLE GUIDES