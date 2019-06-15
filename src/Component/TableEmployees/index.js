import React, { Component } from 'react';
import RowEmployees from './components/RowEmployees';

class TableEmployees extends Component {
  constructor(props){
    super(props);
   
  }
    render() {
        return (
            <>
               <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>
                    <span className="custom-checkbox">
                      <input type="checkbox" id="selectAll" />
                      <label htmlFor="selectAll" />
                    </span>
                  </th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Phone</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.props.data.map((item, index) => {
                    return  <RowEmployees key={index}  
                              toggleUpdateEmloyees = {this.props.toggleUpdate} 
                              toggleDeleteEmloyees = {this.props.toggleDelete} 
                              data={item} 
                            /> 
                  })
                }
               
              </tbody>
            </table> 
            </>
        );
    }
}

export default TableEmployees;