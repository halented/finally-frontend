import React, { Component } from 'react';
import { styles, changeApp } from '../../Styles';
import { services } from '../../apiServices'


// const holder = Object.assign({width: '70%', margin: 'auto'}, styles.columnFlexbox, styles.shadowed)
const holder = Object.assign({}, styles.outerHangBox, styles.columnFlexbox)
const shorterButton = {height: 'auto'}
const label = {fontWeight: 'bold'}

class Settings extends Component {

    state = {
        show: false,
        userData: ''
    }

    logout = () => {
        if(window.confirm("Are you sure you'd like to logout?")){
            localStorage.clear()
            this.props.logoutShow()
        }
    }

    lightsOn = () => {
        console.log(changeApp)
    }

    showModal = (val) => {
        if(!val){
            this.setState({show: false})
            return
        }
        // this.setState({show: true})
        // fetch hang data
        services.fetchData()
        .then(json=>this.setState({show: true, userData: json.user}))
    }

    render(){
        return (
            <div style={holder}>
                {this.state.show ? 
                    <div style={styles.fuzzed} onClick={()=>this.showModal(false)}>
                        <div style={styles.modalContent}>
                            <span style={styles.closeModal} onClick={()=>this.showModal(false)}>&times;</span>
                            {this.state.userData ? 
                                <div>
                                    <div><span style={label}>NAME: </span>{this.state.userData.name}</div>
                                    <div><span style={label}>EMAIL: </span>{this.state.userData.email}</div>
                                    <div><span style={label}>USERNAME: </span>{this.state.userData.username}</div>
                                    <br></br>
                                    {/* <div style={{fontSize: 'small'}}>Click a Field to Edit</div> */}
                                </div>
                            : 
                                <div>l o a d i n g . . .</div>
                            }
                           
                        </div>
                    </div> 
                : 
                    null
                }
                
                <button onClick={this.logout} style={shorterButton}>
                    Logout
                </button>
                <button onClick={()=>this.showModal(true)} style={shorterButton}>
                    Personal Info
                </button>
                <button onClick={this.lightsOn} style={shorterButton}>
                    Lights On
                </button>
            </div>

        )
    }
}

export default Settings