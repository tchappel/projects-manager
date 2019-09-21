import React from 'react';
import { compose, path, isEmpty } from 'ramda';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { selectProjects } from '../../store/ducks/projects';

const Dashboard = ({projects = [], auth = {}}) => {
    const renderDashboard = () => (
        <div className="row">
            <div className="col-6 bg-light">
                {
                    !isEmpty(projects) &&
                    <ProjectList
                        projects={projects}
                    />
                }
            </div>
            <div className="col-6 bg-light">
                <Notifications />
            </div>
        </div>
    );
    // route-guard
    return path(['uid'], auth) ? renderDashboard() : <Redirect to="/signin" />;
};

const mapState = (state) => ({
    projects: selectProjects(state),
    auth: path(['firebase', 'auth'], state)
});

export default compose(
    connect(mapState),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(Dashboard);
