import React, { Component } from 'react';
import Radium from 'radium';
import { styles } from '../../Styles'

class IntrovertShow extends Component {
    render(){
        return (
            <div >
                {this.props.int.name}
            </div>
        )
    }
}

export default Radium(IntrovertShow)