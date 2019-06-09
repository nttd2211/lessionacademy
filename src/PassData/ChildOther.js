import React, { Component } from 'react';

class ChildOther extends Component {
    render() {
        return (
            <div style={{backgroundColor: 'black', color: 'black'}}>
                <button onClick={() => this.props.handleChildOther('new')}>
                    ChildOther change Name : 
                </button>
               
            </div>
        );
    }
}

export default ChildOther;