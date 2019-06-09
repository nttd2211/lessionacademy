import React, { Component } from 'react';
import RowEmployees from './components/RowEmployees';

class TableEmployees extends Component {
  constructor(props){
    super(props);
    this.state = {
      employeesArr : [
        {
          name: 'Thuyduyen',
          email: 'nttduyen2211@gmail.com',
          address: '47a pham van hai',
          phone: '0932467082',
        },
        {
          name: 'Thomas',
          email: 'thomasphomai@gmail.com',
          address: '47a pham van hai',
          phone: '0000000000',
        }
      ]
    }
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
                  this.state.employeesArr.map((item, index) => {
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