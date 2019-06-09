import React, { Component } from 'react';
import ChildOther from './ChildOther'
class Child extends Component {
    render() {
        return (
            <div style={{fontSize: '30px',color: 'red'}}>
                This is Component Child
                {/* <button onClick={() => this.props.action('GET DATA FROM CHILDREN')}> */}
                <button onClick={() => this.props.action('GET DATA FROM CHILDREN')}>
                    Change Parent
                </button>
                <ChildOther handleChildOther = {this.props.handleChildOther}/>  
            </div>
        );
    }
}

export default Child;