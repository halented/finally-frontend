import React, { Component } from 'react';
import Radium from 'radium';

import { IntrovertLink } from './IntrovertLink';

class IntrovertShow extends Component {
    render(){
        return (
            <>
                <div style={{margin: '2%'}}>
                    <IntrovertLink int={this.props.int}/>
                </div>
                <div style={{fontWeight: 'bold', fontSize: 'xx-large'}}>
                    {this.props.int.name.toUpperCase()}
                </div>
            </>
        )
    }
}

// put more info in here
export default Radium(IntrovertShow)

// REFACTOR THIS PAGE TO ABSTRACT STYLE GUIDES