import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProject, createProject2 } from '../../actions/projectActions';

class AddProject extends Component {
  state = {
    projectName: '',
    projectIdentifier: '',
    description: '',
    startDate: '',
    endDate: '',
  };

  handleOnChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    this.setState(() => ({ [name]: value }));
  };

  handleOnSubmit = (e) => {
    e.preventDefault();

    const newProject = {
      ...this.state,
    };

    console.log('new project: ', newProject);
    this.props.createProject2(newProject, this.props.history);
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
                    onChange={this.handleOnChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="projectIdentifier"
                    value={this.state.projectIdentifier}
                    className="form-control form-control-lg"
                    placeholder="Unique Project ID"
                    onChange={this.handleOnChange}
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="description"
                    value={this.state.description}
                    className="form-control form-control-lg"
                    onChange={this.handleOnChange}
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
                    onChange={this.handleOnChange}
                  />
                </div>
                <h6>Estimated End Date</h6>
                <div className="form-group">
                  <input
                    type="date"
                    name="endDate"
                    value={this.state.endDate}
                    className="form-control form-control-lg"
                    onChange={this.handleOnChange}
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

AddProject.propTypes = {
  createProject: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

export default connect(
  null,
  { createProject, createProject2 },
)(AddProject);
