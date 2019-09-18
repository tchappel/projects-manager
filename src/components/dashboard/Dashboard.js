import React from 'react';
import { applySpec } from 'ramda';
import { connect } from 'react-redux';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { selectProjects } from '../../store/ducks/projects';

const Dashboard = ({projects}) => (
    <div className="row">
        <div className="col-6 bg-light">
            <ProjectList
                projects={projects}
            />
        </div>
        <div className="col-6 bg-light">
            <Notifications />
        </div>
    </div>
);

// credit to https://tommmyy.github.io/ramda-react-redux-patterns/pages/redux-ramda.html
const mapState = applySpec({
    projects: selectProjects,
});

export default connect(mapState)(Dashboard);
