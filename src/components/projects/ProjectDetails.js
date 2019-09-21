import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { find, propEq, path, compose, isEmpty } from 'ramda';
import { Redirect } from 'react-router-dom';
import { selectProjects } from '../../store/ducks/projects';

const ProjectDetails = ({project = {}, auth = {}}) => {
    const {title, subtitle, description, id, authorFirstName, authorLastName} = project;
    const renderProjectDetails = () => (
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-body">
                        {isEmpty(project) && <div>Loading Project details...</div>}
                        {
                            !isEmpty(project) && (
                                <React.Fragment>
                                    <h5 className="card-title">{title} - #{id}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{subtitle}</h6>
                                    <h6 className="card-subtitle mb-2 text-muted">posted
                                        by: {authorFirstName} {authorLastName}</h6>
                                    <h6 className="card-subtitle mb-2 text-muted">posted on</h6>
                                    <p className="card-text">{description}</p>
                                </React.Fragment>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>

    );

    // route-guard
    return path(['uid'], auth) ? renderProjectDetails() : <Redirect to="/signin" />;
};

const mapState = (state, ownProps) => {
    // access route params by props passed by react-router
    const id = path(['match', 'params', 'id'], ownProps);
    const projects = selectProjects(state) || [];
    const project = isEmpty(projects) && id ? {} : find(propEq('id', id), projects);
    return {
        auth: path(['firebase', 'auth'], state),
        project,
    };
};

export default compose(
    connect(mapState),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(ProjectDetails);
