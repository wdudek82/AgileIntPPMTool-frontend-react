import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProjects } from '../actions/projectActions';
import ProjectItem from './Project/ProjectItem';
import CreateProjectButton from './Project/CreateProjectButton';

class Dashboard extends Component {
  state = {
    projects: {},
  };

  componentDidMount() {
    this.setState(() => ({ projects: this.props.getProjects() }));
  }

  render() {
    console.log('projects: ', this.state.projects);

    return (
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Projects</h1>
              <br />

              <CreateProjectButton />

              <br />
              <hr />

              <ProjectItem />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propsTypes = {
  projects: PropTypes.object.isRequired,
  getProjects: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  projects: state.projects,
});

export default connect(
  mapStateToProps,
  { getProjects },
)(Dashboard);
