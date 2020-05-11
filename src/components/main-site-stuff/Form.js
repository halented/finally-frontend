import React, { Component } from 'react';
import Radium from 'radium';
import { styles } from '../../Styles'

const formBoxStyle = Object.assign(styles.forms, styles.shadowed)

class Form extends Component {
    state= {
        introvertValue: '',
        purposeValue: ''
    }

    handleChange = (ev, kind) => {
        if(kind === "introvertValue"){
            this.setState({introvertValue: ev.target.value})
        }
        else this.setState({purposeValue: ev.target.value})
    }

    render(){
        return (
            <>
            {this.props.trait === 'introvert' ? 
                <form style={formBoxStyle} onSubmit={(ev)=>{this.props.saveIntrovert(ev)}}>
                    <label>Name:</label>
                    <input placeholder='name' name='name'></input>
                    <label>Recharge Activity:</label>
                    <input placeholder='recharge activity' name='activity'></input>
                    <button type='submit'>Submit</button>
                    <span onClick={ () => {this.props.changeShow("")}} style={styles.infoLinks}>Go Back</span>
                </form>
            :
                <form style={formBoxStyle} onSubmit={(ev)=>{this.props.saveHangout(ev)}}>
                    <label>Introvert:</label>
                    <select id="introvert" value={this.state.introvertValue} onChange={(ev)=>this.handleChange(ev, "introvertValue")}>
                        {this.props.introverts.map(int=>{
                        return <option value={int.name} key={int.id}>{int.name}</option>
                        })}
                    </select>
                    <label>Purpose:</label>
                    <select id='purpose'value={this.state.purposeValue} onChange={this.handleChange}>
                        {this.props.purposes.map(purpose=>{
                        return <option value={purpose.title} key={purpose.title}>{purpose.title}</option>
                        })}
                    </select>
                    <button type='submit'>Submit</button>
                    <span onClick={ () => {this.props.changeShow("")}} style={styles.infoLinks}>Go Back</span>
                </form>
            }
            </>
        )
    }
}

export default Radium(Form)