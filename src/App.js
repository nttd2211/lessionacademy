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

  render() {
    return (
      <div>
        <div className="container">
          <div className="table-wrapper">
            <Title
              toggleAdd={() => this.handleModalAddEmployees()}
              toggleDelete={() => this.handleModalDeleteEmployees()}
            />
            <TableEmployees
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
                      onClick={() => this.handleModalAddEmployees()}/>
                      <input type="submit" className="btn btn-success" defaultValue="Add" />
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
                      onClick={()=>this.handleModalUpdateEmployees()}
                      />
                      <input type="submit" className="btn btn-info" defaultValue="Save" />
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
                      onClick={()=>this.handleModalDeleteEmployees()}>×</button>
                  </div>
                  <div className="modal-body">
                    <p>Are you sure you want to delete these Records?</p>
                    <p className="text-warning"><small>This action cannot be undone.</small></p>
                  </div>
                  <div className="modal-footer">
                    <input type="button" className="btn btn-default" data-dismiss="modal" 
                    defaultValue="Cancel" 
                    onClick={()=>this.handleModalDeleteEmployees()}/>
                    <input type="submit" className="btn btn-danger" defaultValue="Delete" />
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
