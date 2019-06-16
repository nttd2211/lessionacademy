import React, { Component } from 'react';

class RowEmployees extends Component {
    render() {
        let {data} = this.props;
        return (
            <tr>
            <td>
              <span className="custom-checkbox">
                <input type="checkbox" id="checkbox1" name="options[]" defaultValue={data.index} />
                <label htmlFor="checkbox1" />
              </span>
            </td>
            <td>{data.name}</td>
            <td>{data.email}</td>
            <td>{data.address}</td>
            <td>{data.phone}</td>
            <td>
                <a 
                    onClick={()=>this.props.toggleUpdateEmloyees((data.index))}
                    className="edit" data-toggle="modal">
                        <i style={{cursor : 'pointer'}} className="material-icons" data-toggle="tooltip" title="Edit">
                        </i>
                </a>
                <a 
                    onClick={()=>this.props.toggleDeleteEmloyees(data.index)}
                    className="delete" 
                    data-toggle="modal">
                        <i 
                        style={{cursor : 'pointer'}}
                        className="material-icons" data-toggle="tooltip" title="Delete">
                        </i>
                </a>
            </td>
          </tr>
        );
    }
}

export default RowEmployees;