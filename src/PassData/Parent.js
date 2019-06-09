import React, { Component } from 'react';
import Child from './Child';
import ChildOther from './ChildOther'
class Parent extends Component {
    constructor(props){
        super(props);
        this.state={
            data: ' Data Parent ',
            name: 'Nguyen Thi Thuy Duyen',
        }
    }

    handleChild = (dataFromChild) => {
        this.setState({
            data: dataFromChild
        })
    }

    handleChildOther = (newName) => {
        this.setState({
            name: newName
        })
    }

    render() {
        return (
            <div style={{fontSize: '30px',}}>
                Old Data : {this.state.data} <br />
                <span>Old Name : {this.state.name}</span><br/>
                <Child action = {this.handleChild}  handleChildOther = {this.handleChildOther}/>
            </div>
        );
    }
}

export default Parent;