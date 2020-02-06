import React, { Component } from 'react';
import Radium from 'radium';
import { styles } from '../../Styles'

class Form extends Component {
    state= {
        value: ''
    }

    handleChange = (ev) => {
        this.setState({value: ev.target.value})
    }

    render(){
        console.log(this.props.introverts)
        return (
            <>
            {this.props.trait === 'introvert' ? 
                <form style={styles.forms} onSubmit={(ev)=>{this.props.saveIntrovert(ev)}}>
                    <label>Name:</label>
                    <input placeholder='name' name='name'></input>
                    <label>Recharge Activity:</label>
                    <input placeholder='recharge activity' name='activity'></input>
                    <button type='submit'>Submit</button>
                    <span onClick={ () => {this.props.changeShow("")}} style={styles.infoLinks}>Go Back</span>
                </form>
            :
                <form style={styles.forms} onSubmit={(ev)=>{this.props.saveHangout(ev)}}>
                    <label>Introvert:</label>
                    <select value={this.state.value} onChange={this.handleChange}>
                        {this.props.introverts.map(int=>{
                        return <option value={int.name}>{int.name}</option>
                        })}
                    </select>
                    <label>Purpose:</label>
                    nother dropdown
                    <button type='submit'>Submit</button>
                    <span onClick={ () => {this.props.changeShow("")}} style={styles.infoLinks}>Go Back</span>
                </form>
            }
            </>
        )
    }
}

export default Radium(Form)