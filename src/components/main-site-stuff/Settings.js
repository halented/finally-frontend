import React, { Component } from 'react';
import { styles } from '../../Styles';
import { services } from '../../apiServices'

const holder = Object.assign({}, styles.outerHangBox, styles.columnFlexbox)
const shorterButton = {height: 'auto'}
const label = {fontWeight: 'bold'}

class Settings extends Component {

    state = {
        show: false,
        howTo: false,
        userData: ''
    }

    logout = () => {
        if(window.confirm("Are you sure you'd like to logout?")){
            localStorage.clear()
            this.props.logoutShow()
        }
    }

    showModal = (val, kind='none') => {
        if(!val){
            this.setState({show: false, userData: '', howTo: false})
            return
        }
        if(kind === "personal") {
            services.fetchData()
            .then(json=>this.setState({show: true, userData: json.user}))
        }
        else {
            this.setState({show: true, howTo: true})
        }
    }

    render(){
        return (
            <div style={holder}>
                {this.state.show ? 
                    <div style={styles.fuzzed} onClick={()=>this.showModal(false)}>
                        <div style={styles.modalContent}>
                            <span style={styles.closeModal} onClick={()=>this.showModal(false)}>&times;</span>
                            {this.state.userData.name ? 
                                <div>
                                    <div><span style={label}>NAME: </span>{this.state.userData.name}</div>
                                    <div><span style={label}>EMAIL: </span>{this.state.userData.email}</div>
                                    <div><span style={label}>USERNAME: </span>{this.state.userData.username}</div>
                                    {/* <div style={{fontSize: 'small'}}>Click a Field to Edit</div> */}
                                </div>
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