import React, { Component } from 'react';
import Radium from 'radium';
import { styles } from '../../Styles'

const formBoxStyle = Object.assign({margin: '1em', width: 'auto'}, styles.forms, styles.shadowed, styles.columnFlexbox)
const infoDiv = {fontSize:'small', paddingTop: '2%'}
const clickable = {color: 'lightblue', cursor: 'pointer'}
const imgArray = ["bear", "bull", "bunny", "dog", "flamingo", "koala", "octopus"]

class Form extends Component {
    state= {
        introvertValue: '',
        purposeValue: '',
        imageValue: '',
        intensity: 0,
        addPurpose: true
    }

    handleChange = (ev, kind) => {
        switch(kind){
            case "introvertValue":
                this.setState({introvertValue: ev.target.value})
                break
            case "purposeValue":
                this.setState({purposeValue: ev.target.value})
                break
            case "imageValue":
                this.setState({imageValue: ev.target.value})
                break
            case "intensity":
                this.setState({intensity: ev.target.value})
                break
            default:
                alert("Something's gone wrong. Please try again.")
        }
    }
    showAddPurpose = () => {
        this.setState({addPurpose: !this.state.addPurpose})
    }

    render(){
        return (
            <>
            {this.state.addPurpose? 
                <form style={formBoxStyle} onSubmit={(ev)=>{this.props.savePurpose(ev)}}>
                    <label>Title (ex: kickboxing, hiking):</label>
                    <input placeholder='title' name='title'></input>
                    <label>Equipment (ex: gloves):</label>
                    <input placeholder='equipment' name='equipment'></input>
                    <label>Intensity Level:</label>
                    <select id='intensity'value={this.state.intensity} onChange={(ev)=>this.handleChange(ev, "intensity")}>
                        {/* numbers 1-10 */}
                        {[...Array(10).keys()].map(el=>{
                        return <option value={el+1} key={el+1}>{el+1}</option>
                        })}
                    </select>
                    <button type='submit'>Submit</button>
                    <span onClick={this.showAddPurpose} style={styles.infoLinks}>Go Back</span>
                </form>
            :
            <>
            {this.props.trait === 'introvert' ?
            <form style={formBoxStyle} onSubmit={(ev)=>{this.props.saveIntrovert(ev)}}>
                <label>Name:</label>
                <input placeholder='name' name='name'></input>
                <label>Recharge Activity:</label>
                <input placeholder='recharge activity' name='activity'></input>
                <label>Image:</label>
                <select id='image'value={this.state.imageValue} onChange={(ev)=>this.handleChange(ev, "imageValue")}>
                    {imgArray.map(image=>{
                    return <option value={image} key={image}>{image}</option>
                    })}
                </select>
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
                <select id='purpose'value={this.state.purposeValue} onChange={(ev)=>this.handleChange(ev, "purposeValue")}>
                    {this.props.purposes.map(purpose=>{
                    return <option value={purpose.title} key={purpose.title}>{purpose.title}</option>
                    })}
                </select>
                <div style={infoDiv}>Not seeing your hangout purpose? <span style={clickable} onClick={this.showAddPurpose}>CLICK HERE </span>to add a new one</div>
                <button type='submit'>Submit</button>
                <span onClick={ () => {this.props.changeShow("")}} style={styles.infoLinks}>Go Back</span>
            </form>
            }
            </>
            }
            
            </>
        )
    }
}

export default Radium(Form)
