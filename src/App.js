import React from 'react';
import './App.css';
import Title from './Component/Title';
import TableEmployees from './Component/TableEmployees';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowModalAddEmployees: false,
      isShowModalUpdateEmployees: false,
      isShowModalDeleteEmployees: false,
      name: '',
      email: '',
      address: '',
      phone: '',
      employeesArr: [
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

  handleModalAddEmployees = () => {
    this.setState({
      isShowModalAddEmployees: !this.state.isShowModalAddEmployees
    })
  }

  handleModalUpdateEmployees = () => {
    this.setState({
      isShowModalUpdateEmployees: !this.state.isShowModalUpdateEmployees
    })
  }

  handleModalDeleteEmployees = () => {
    this.setState({
      isShowModalDeleteEmployees: !this.state.isShowModalDeleteEmployees
    })
  }

  handleOnchange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleAddSubmit = (e, string) => {
    console.log(string)
    e.preventDefault();
    console.log(e,'0000000000000')
    let result = this.state.employeesArr;
    result.push({
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
      phone: this.state.phone,
    });
    this.setState({
      employeesArr : result
    })
  }

  render() {
   
    return (
     
      <div>
         <button onClick={() => this.handleAddSubmit()}>add</button>
        <div className="container">
          <div className="table-wrapper">
            <Title
              toggleAdd={() => this.handleModalAddEmployees()}
              toggleDelete={() => this.handleModalDeleteEmployees()}
            />
            <TableEmployees
              data={this.state.employeesArr}
              toggleUpdate={() => this.handleModalUpdateEmployees()}
              toggleDelete={() => this.handleModalDeleteEmployees()}
            />
          </div>
        </div>
        {/* Edit Modal HTML */}
        {
          this.state.isShowModalAddEmployees ?
            <div id="addEmployeeModal"  >
              <div className="modal-dialog">
                <div className="modal-content">
                  <form>
                    <div className="modal-header">
                      <h4 className="modal-title">Add Employee</h4>
                      <button type="button"
                        className="close" data-dismiss="modal"
                        aria-hidden="true"
                        onClick={() => this.handleModalAddEmployees()}>×</button>
                    </div>
                    <div className="modal-body">
                      <div className="form-group">
                        <label>Name</label>
                        <input type="text" name="name" className="form-control" required onChange={this.handleOnchange} />
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <input type="email" name="email" className="form-control" required onChange={this.handleOnchange} />
                      </div>
                      <div className="form-group">
                        <label>Address</label>
                        <textarea name="address" className="form-control" required defaultValue={""} onChange={this.handleOnchange} />
                      </div>
                      <div className="form-group">
                        <label>Phone</label>
                        <input type="text" name="phone" className="form-control" required onChange={this.handleOnchange} />
                      </div>
                    </div>
                    <div className="modal-footer">
                      <input type="button" className="btn btn-default" data-dismiss="modal"
                        defaultValue="Cancel"
                        onClick={() => this.handleModalAddEmployees()} />
                      <input  onClick={(e) => this.handleAddSubmit(e,'string')} className="btn btn-success" defaultValue="Add" />
                    </div>
                  </form>
                </div>
              </div>
            </div> : ''
        }

        {/* Edit Modal HTML */}
        {
          this.state.isShowModalUpdateEmployees ?
            <div id="editEmployeeModal" >
              <div className="modal-dialog">
                <div className="modal-content">
                  <form>
                    <div className="modal-header">
                      <h4 className="modal-title">Edit Employee</h4>
                      <button type="button" className="close"
                        data-dismiss="modal" aria-hidden="true"
                        onClick={() => this.handleModalUpdateEmployees()}
                      >×</button>
                    </div>
                    <div className="modal-body">
                      <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" required />
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" required />
                      </div>
                      <div className="form-group">
                        <label>Address</label>
                        <textarea className="form-control" required defaultValue={""} />
                      </div>
                      <div className="form-group">
                        <label>Phone</label>
                        <input type="text" className="form-control" required />
                      </div>
                    </div>
                    <div className="modal-footer">
                      <input type="button" className="btn btn-default" data-dismiss="modal"
                        defaultValue="Cancel"
                        onClick={() => this.handleModalUpdateEmployees()}
                      />
                      <input  className="btn btn-info" defaultValue="Save" />
                    </div>
                  </form>
                </div>
              </div>
            </div> : ''
        }

        {/* Delete Modal HTML */}
        {this.state.isShowModalDeleteEmployees ?
          <div id="deleteEmployeeModal" >
            <div className="modal-dialog">
              <div className="modal-content">
                <form>
                  <div className="modal-header">
                    <h4 className="modal-title">Delete Employee</h4>
                    <button type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-hidden="true"
                      onClick={() => this.handleModalDeleteEmployees()}>×</button>
                  </div>
                  <div className="modal-body">
                    <p>Are you sure you want to delete these Records?</p>
                    <p className="text-warning"><small>This action cannot be undone.</small></p>
                  </div>
                  <div className="modal-footer">
                    <input type="button" className="btn btn-default" data-dismiss="modal"
                      defaultValue="Cancel"
                      onClick={() => this.handleModalDeleteEmployees()} />
                    <input  className="btn btn-danger" defaultValue="Delete" />
                  </div>
                </form>
              </div>
            </div>
          </div> : ''}

      </div>
    );
  }

}

export default App;
