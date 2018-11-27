import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProjects } from '../actions/projectActions';
import ProjectItem from './Project/ProjectItem';
import CreateProjectButton from './Project/CreateProjectButton';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getProjects();
  }

  renderProjects = () => {
    if (this.props.projects !== null) {
      return this.props.projects.map(
        (project) => (
          <ProjectItem
            key={project.projectIdentifier}
            project={project}
          />
        ),
      );
    }
    return [];
  };

  render() {
    console.log(
      'projects render:',
      this.props.projects !== null ? this.props.projects : 'nope',
    );
    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Projects</h1>
              <br />

              <CreateProjectButton />

              {this.renderProjects()}
              <br />
              <hr />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.defaultProps = {
  projects: [],
};

Dashboard.propsTypes = {
  projects: PropTypes.array,
  getProjects: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  projects: state.projects.projects,
});

export default connect(
  mapStateToProps,
  { getProjects },
)(Dashboard);
