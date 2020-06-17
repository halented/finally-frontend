import React, { Component } from 'react';
import { styles } from '../../Styles';
// import { services } from '../../apiServices'

const holder = Object.assign({}, styles.outerHangBox, styles.columnFlexbox)
const shorterButton = {height: 'auto'}
const label = {fontWeight: 'bold'}

class Settings extends Component {

    state = {
        show: false,
        howTo: false,
        editUser: false,
        showUser: false,
        newInfo: {id: '', name: '', username: '', email: ''}
    }

    logout = () => {
        if(window.confirm("Are you sure you'd like to logout?")){
            localStorage.clear()
            this.props.logoutShow()
        }
    }

    showModal = (val, kind='none') => {
        console.log(this.props.userData)
        if(!val){
            this.setState({show: false, showUser: false, howTo: false, editUser: false})
            return
        }
        if(kind === "personal") {
            this.setState({show: true, showUser: true})
        }
        else if(kind === 'howTo') {
            this.setState({show: true, howTo: true})
        }
    }

    handleChange = (ev) => {
        const key = ev.target.name
        const val = ev.target.value

        this.setState((prevState)=>({
            ...prevState,
            newInfo: {
                ...prevState.newInfo,
                [key]: val
            }
        }))
    }

    handleEditSwitch = () => {
        const { name, email, username } = this.props.userData
        this.setState({
            editUser: true, 
            showUser: false, 
            newInfo: {
                name,
                email,
                username
            }
        })
    }

    handleSubmit = (ev) => {
        this.props.updateUserDetails(ev, this.state.newInfo)
        this.setState((prevState)=>({
            ...prevState,
            showModal: false,
            show: false,
            editUser: false
        }))
    }

    render(){
        const { name, email, username} = this.props.userData
        return (
            <div style={holder}>
                {this.state.show ? 
                    <div style={styles.fuzzed}>
                        <div style={styles.modalContent}>
                            <span style={styles.closeModal} onClick={()=>this.showModal(false)}>&times;</span>
                            {this.state.showUser ? 
                                <div>
                                    <div><span style={label}>NAME: </span>{name}</div>
                                    <div><span style={label}>EMAIL: </span>{email}</div>
                                    <div><span style={label}>USERNAME: </span>{username}</div>
                                    <button onClick={this.handleEditSwitch}>Edit Details</button>
                                </div>
                            : 
                                null
                            }
                            {this.state.editUser ? 
                                <form onSubmit={(ev)=>this.handleSubmit(ev)} style={styles.columnFlexbox}>
                                    <label>Name: </label>
                                    <input placeholder={name} name='name' onChange={(ev)=>this.handleChange(ev)} value={this.state.newInfo.name}></input>
                                    <label>Email: </label>
                                    <input placeholder={email} name='email' onChange={(ev)=>this.handleChange(ev)} value={this.state.newInfo.email}></input>
                                    <label>Username: </label>
                                    <input placeholder={username} name='username' onChange={(ev)=>this.handleChange(ev)} value={this.state.newInfo.username}></input>
                                    <button type='submit'>Save</button>
                                </form>
                            :
                                null
                            }
                            {this.state.howTo ? 
                                <div>
                                    On the <span style={{fontWeight:'bold'}}>Home</span> page, you'll find the three introverted friends that you hung out with most recently. From there, you can either add a new friend, or record a new hangout. Recording a new hangout will place that friend on cooldown -- meaning you can't hang out with them again until a set period of time has passsed. Any friend is clickable to view more details -- including whether or not that friend is on cooldown. You can also tell based on the render of the friend icon -- greyed out friends are currently on cooldown and not able to hang out. 
                                    <div>_________________</div>
                                    <div>
                                        You can also use this app to view your hangout histoy. The <span style={{fontWeight:'bold'}}>Hangouts</span> page will show all past hangouts (clickable for more info), and the <span style={{fontWeight:'bold'}}>Metrics</span> page will show you a year by year, Hangouts Per Month graph. 
                                    </div>
                                </div>
                            :
                                null
                            }
                        </div>
                    </div> 
                : 
                    null
                }
                
                <button onClick={this.logout} style={shorterButton}>
                    Logout
                </button>
                <button onClick={()=>this.showModal(true, "personal")} style={shorterButton}>
                    Personal Info
                </button>
                <button onClick={()=>this.showModal(true, "howTo")} style={shorterButton}>
                    How to Use
                </button>
            </div>

        )
    }
}

export default Settings