import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose, path } from 'ramda';
import { Redirect } from 'react-router-dom';
import TextInput from '../form/TextInput';
import TextArea from '../form/TextArea';
import { createProject } from '../../store/ducks/projects';

const CreateProject = ({handleSubmit, auth = {}}) => {
    const renderCreateProject = () => (
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <h2>Create new project</h2>
                            </div>
                            <Field
                                name="title"
                                label="Project title"
                                type="text"
                                component={TextInput}
                            />
                            <Field
                                name="subtitle"
                                label="Subtitle"
                                type="text"
                                component={TextInput}
                            />
                            <Field
                                name="description"
                                label="Description"
                                component={TextArea}
                            />
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-block">Create Project</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

    // route-guard
    return path(['uid'], auth) ? renderCreateProject() : <Redirect to="/signin" />;
};

const mapState = state => {
    return {
        auth: path(['firebase', 'auth'], state),
    };
};

export default compose(
    connect(mapState),
    reduxForm({
        // a unique name for the form
        form: 'createProject',
        onSubmit: (values, dispatch) => {
            dispatch(createProject(values));
        },
    }),
)(CreateProject);



