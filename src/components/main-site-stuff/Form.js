import React, { Component } from 'react';
import Radium from 'radium';
import { styles } from '../../Styles'

class Form extends Component {
    render(){
        return (
            <>
            {this.props.trait === 'introvert' ? 
                <form style={styles.forms} onSubmit={(ev)=>{this.props.saveIntrovert(ev)}}>
                    <label>Name:</label>
                    <input placeholder='name' name='name'></input>
                    <label>Recharge Activity:</label>
                    <input placeholder='recharge activity' name='activity'></input>
                    <input type='submit' style={styles.button}/>
                </form>
            :
                <form style={styles.forms} onSubmit={(ev)=>{this.saveIntrovert(ev)}}>
                    <label>Introvert:</label>
                    dropdown menu
                    <label>Purpose:</label>
                    nother dropdown
                    <input type='submit' style={styles.button}/>
                </form>
            }
            </>
        )
    }
}

export default Radium(Form)