import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProject } from '../../actions/projectActions';
import classnames from 'classnames';

class UpdateProject extends Component {
  state = {
    projectIdentifier: '',
    projectName: '',
    description: '',
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    if (id) {
      this.props.getProject(id);
      this.setState(() => ({ ...this.props.project }));
    }
  }

  render() {
    const { errors } = this.props.errors;

    console.log('project: ', this.props.project);
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

const mapStateToProps = (state) => ({
  project: state.projects.project,
  errors: state.errors,
});

export default connect(
  mapStateToProps,
  { getProject },
)(UpdateProject);
