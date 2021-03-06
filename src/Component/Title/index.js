import React, { Component } from 'react';

class Title extends Component {

    render() {
        return (
            <>
                <div className="table-title">
                    <div className="row">
                        <div className="col-sm-6">
                            <h2>Manage <b>Employees</b></h2>
                        </div>
                        <div className="col-sm-6">
                            <a 
                                onClick={() => this.props.toggleAdd()}
                                className="btn btn-success" 
                                data-toggle="modal">
                                    <i className="material-icons"></i> 
                                    <span>Add New Employee</span>
                            </a>
                            {/* <a 
                                onClick={() => this.props.toggleDelete()}
                                className="btn btn-danger" 
                                data-toggle="modal">
                                    <i className="material-icons"></i> 
                                    <span>Delete</span></a> */}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Title;