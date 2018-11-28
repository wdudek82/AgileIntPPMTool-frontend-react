import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { createProject, getProject } from '../../actions/projectActions';

class UpdateProject extends Component {
  state = {
    id: '',
    projectName: '',
    projectIdentifier: '',
    description: '',
    startDate: '',
    endDate: '',
    errors: {},
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getProject(id, this.props.history);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState(() => ({ errors: nextProps.errors }));
    }

    const { project } = nextProps;
    this.setState((prevState) => ({ ...prevState, ...project }));

  }

  handleOnChange = (e) => {
    const { value, name } = e.target;
    this.setState(() => ({ [name]: value }));
  };

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.createProject(this.state, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <div>
        <h1>Update project</h1>

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
                      disabled
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
      </div>
    );
  }
}

UpdateProject.propTypes = {
  id: PropTypes.string.isRequired,
  getProject: PropTypes.func.isRequired,
  createProject: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  project: state.projects.project,
  errors: state.errors,
});

export default connect(
  mapStateToProps,
  { getProject, createProject },
)(UpdateProject);
