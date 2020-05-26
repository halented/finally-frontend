import React from 'react';
import { styles } from '../../Styles'
import Radium from 'radium';
import { IntrovertLink } from './IntrovertLink';
import { pulse } from 'react-animations';

const pulser = {
    pulse: {
      animation: 'x 1s infinite',
      animationName: Radium.keyframes(pulse, 'pulse')
    }
  }

class IntrovertShow extends React.Component {

    state = {
        charging: false
    }

    charge = () => {
        this.setState({charging: true}, this.chargeHelper())
    }

    chargeHelper = () => {
        const { recharge, int } = this.props
        setTimeout(()=>{ 
            recharge(int)
            this.setState({charging: false})
        }, 3000)
    }

    render() {
        const { name, activity, on_cooldown} = this.props.int
        return (
            <div style={{overflow: 'scroll'}}>
                <div style={{margin: '2%'}}>
                    <IntrovertLink int={this.props.int}/>
                </div>
                <div style={{fontWeight: 'bold', fontSize: 'xx-large', color: 'lightblue'}}>
                    It's {name.toUpperCase()}!
                </div>
                <div style={styles.columnFlexbox}>
                    {this.state.charging ?
                        <div style={pulser.pulse}>{name} is charging.....!</div>
                    :
                        <>
                            <span>Recharge activity: {activity}</span>
                            {on_cooldown ? 
                                <button onClick={()=>this.charge()}>Recharge!</button>
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
}

export default Radium(IntrovertShow)