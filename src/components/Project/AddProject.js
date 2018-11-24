import React, { Component } from 'react';

class AddProject extends Component {
  state = {
    projectName: '',
    projectIdentifier: '',
    description: '',
    startDate: '',
    endDate: '',
  };

  handleOnChange = (e, fieldName) => {
    e.preventDefault();
    const { value } = e.target;
    this.setState(() => ({ [fieldName]: value }));
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h5 className="display-4 text-center">
                Create / Edit Project form
              </h5>
              <hr />
              <form onSubmit={this.handleOnSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="projectName"
                    value={this.state.projectName}
                    className="form-control form-control-lg "
                    placeholder="Project Name"
                    onChange={(e) => this.handleOnChange(e, 'projectName')}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="projectIdentifier"
                    value={this.state.projectIdentifier}
                    className="form-control form-control-lg"
                    placeholder="Unique Project ID"
                    onChange={(e) =>
                      this.handleOnChange(e, 'projectIdentifier')
                    }
                    disabled
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="description"
                    value={this.state.description}
                    className="form-control form-control-lg"
                    onChange={(e) => this.handleOnChange(e, 'description')}
                    placeholder="Project Description"
                  />
                </div>
                <h6>Start Date</h6>
                <div className="form-group">
                  <input
                    type="date"
                    name="startDate"
                    value={this.state.startDate}
                    className="form-control form-control-lg"
                    onChange={(e) => this.handleOnChange(e, 'startDate')}
                  />
                </div>
                <h6>Estimated End Date</h6>
                <div className="form-group">
                  <input
                    type="date"
                    name="endDate"
                    value={this.state.endDate}
                    className="form-control form-control-lg"
                    onChange={(e) => this.handleOnChange(e, 'endDate')}
                  />
                </div>

                <input
                  type="submit"
                  className="btn btn-primary btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddProject;
