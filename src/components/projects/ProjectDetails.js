import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { find, propEq, path, compose, isEmpty } from 'ramda';
import { selectProjects } from '../../store/ducks/projects';

const ProjectDetails = ({project = {}}) => {
    const {title, subtitle, description, id, authorFirstName, authorLastName} = project;
    const renderProjectDetails = () => (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{title} - #{id}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
                <h6 className="card-subtitle mb-2 text-muted">posted by: {authorFirstName} {authorLastName}</h6>
                <h6 className="card-subtitle mb-2 text-muted">posted on</h6>
                <p className="card-text">{description}</p>
            </div>
        </div>
    );
    return (
        <div className="row">
            <div className="col">
                {
                    isEmpty(project)
                        ? 'Loading Project...'
                        : renderProjectDetails()
                }
            </div>
        </div>
    );
};

const mapState = (state, ownProps) => {
    // access route params by props/match/params/id
    const id = path(['match', 'params', 'id'], ownProps);
    const projects = selectProjects(state) || [];
    const project = isEmpty(projects) && id ? {} : find(propEq('id', id), projects);
    return {
        project,
    };
};

export default compose(
    connect(mapState),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(ProjectDetails);
