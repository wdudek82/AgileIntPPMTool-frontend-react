import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { createProject } from '../../actions/projectActions';

class AddProject extends Component {
  state = {
    projectName: '',
    projectIdentifier: '',
    description: '',
    startDate: '',
    endDate: '',
    errors: {},
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState(() => ({ errors: nextProps.errors }));
    }
  }

  handleOnChange = (e) => {
    const { value, name } = e.target;
    this.setState(() => ({ [name]: value }));
  };

  handleOnSubmit = (e) => {
    e.preventDefault();

    const newProject = {
      ...this.state,
    };

    this.props.createProject(newProject, this.props.history);
  };

  render() {
    const { errors } = this.state;

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
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.projectName,
                    })}
                    placeholder="Project Name"
                    onChange={this.handleOnChange}
                  />
                  <p className="text-danger">{errors.projectName}</p>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="projectIdentifier"
                    value={this.state.projectIdentifier}
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.projectIdentifier,
                    })}
                    placeholder="Unique Project ID"
                    onChange={this.handleOnChange}
                  />
                  <p className="text-danger">{errors.projectIdentifier}</p>
                </div>
                <div className="form-group">
                  <textarea
                    name="description"
                    value={this.state.description}
                    className={classnames('form-control form-control-lg', {
                      'is-invalid': errors.description,
                    })}
                    onChange={this.handleOnChange}
                    placeholder="Project Description"
                  />
                  <p className="text-danger">{errors.description}</p>
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
                  <p className="text-danger">{errors.startDate}</p>
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
                  <p className="text-danger">{errors.endDate}</p>
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
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(
  mapStateToProps,
  { createProject },
)(AddProject);
