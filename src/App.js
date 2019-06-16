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
      index: null,
      name: '',
      email: '',
      address: '',
      phone: '',
      currentArrUpdate: [],
      employeesArr: [
        {
          index: 0,
          name: 'Thuyduyen',
          email: 'nttduyen2211@gmail.com',
          address: '47a pham van hai',
          phone: '0932467082',
        },
        {
          index: 1,
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

  handleModalUpdateEmployees = (index) => {
    this.setState({
      isShowModalUpdateEmployees: !this.state.isShowModalUpdateEmployees,
      index: index,
      currentArrUpdate: this.state.employeesArr[index],
    })
  }

  handleOkUpdate = () => {
    const data = this.state.currentArrUpdate;
    let result = this.state.employeesArr;
    let dataUpdate = {
          index: (this.state.index !== '') ? this.state.index : data.index,
          name: (this.state.name !== '') ? this.state.name : data.name,
          email: (this.state.email !== '') ? this.state.email : data.email,
          address: (this.state.address !== '') ? this.state.address : data.address,
          phone: (this.state.phone !== '') ? this.state.phone : data.phone,
    }
    result.splice(data.index,1);
    result.splice(data.index,0,dataUpdate)
    this.setState({
      employeesArr: result
    })
   
  }

  handleModalDeleteEmployees = (index) => {
    this.setState({
      isShowModalDeleteEmployees: !this.state.isShowModalDeleteEmployees,
      index: index,
    })
  }

  handleOnchange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  handleAddSubmit = (e) => {
    e.preventDefault();
    let result = this.state.employeesArr;
    result.push({
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
      phone: this.state.phone,
    });
    this.setState({
      employeesArr: result
    })
  }

  handleDelete = (e) => {
    e.preventDefault();
    let result = this.state.employeesArr;
    result.splice(this.state.index, 1)
    this.setState({
      employeesArr: result
    })
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="table-wrapper">
            <Title
              toggleAdd={() => this.handleModalAddEmployees()}
            // toggleDelete={() => this.handleModalDeleteEmployees()}
            />
            <TableEmployees
              data={this.state.employeesArr}
              toggleUpdate={this.handleModalUpdateEmployees}
              toggleDelete={this.handleModalDeleteEmployees}
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
                      <input onClick={(e) => this.handleAddSubmit(e)} className="btn btn-success" defaultValue="Add" />
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
                        onClick={()=>this.handleModalUpdateEmployees()}
                      >×</button>
                    </div>
                    <div className="modal-body">
                      <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" required
                          defaultValue={this.state.currentArrUpdate ? this.state.currentArrUpdate.name : ''}
                          name="name"
                          onChange={this.handleOnchange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" required
                          defaultValue={this.state.currentArrUpdate ? this.state.currentArrUpdate.email : ''}
                          name="email"
                          onChange={this.handleOnchange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Address</label>
                        <textarea className="form-control" required
                          defaultValue={this.state.currentArrUpdate ? this.state.currentArrUpdate.address : ''}
                          name="address"
                          onChange={this.handleOnchange}
                        />
                      </div>
                      <div className="form-group">
                        <label>Phone</label>
                        <input type="text" className="form-control" required
                          defaultValue={this.state.currentArrUpdate ? this.state.currentArrUpdate.phone : ''}
                          name="phone"
                          onChange={this.handleOnchange}
                        />
                      </div>
                    </div>
                    <div className="modal-footer">
                      <input type="button" className="btn btn-default" data-dismiss="modal"
                        defaultValue="Cancel"
                        onClick={()=>this.handleModalUpdateEmployees()}
                      />
                      <input onClick={()=>this.handleOkUpdate()} className="btn btn-info" defaultValue="Save" />
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
                    <p>Bạn có chắc chắn muốn xóa phần tử {this.state.index}</p>
                    <p className="text-warning"><small>This action cannot be undone.</small></p>
                  </div>
                  <div className="modal-footer">
                    <input type="button" className="btn btn-default" data-dismiss="modal"
                      defaultValue="Cancel"
                      onClick={() => this.handleModalDeleteEmployees()} />
                    <input className="btn btn-danger" defaultValue="Delete"
                      onClick={(e) => this.handleDelete(e)}
                    />
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
