import React from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose, path, pathOr } from 'ramda';
import TextInput from '../form/TextInput';
import { signIn } from '../../store/ducks/auth';
import { Redirect } from 'react-router-dom';

const SignIn = ({handleSubmit, authError = null, auth = {}}) => {
    const renderSignIn = () => (
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <h2>Login to account</h2>
                            </div>
                            <Field
                                name="email"
                                label="Email"
                                type="email"
                                component={TextInput}
                            />
                            <Field
                                name="password"
                                label="Password"
                                type="password"
                                component={TextInput}
                            />
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-block">Sign In to your
                                    account
                                </button>
                            </div>
                            <hr />
                            <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
                        </form>
                    </div>
                </div>
                {
                    authError &&
                    <div className="alert alert-danger text-center" role="alert">
                        {pathOr('Login Error', ['message'], authError)}
                    </div>
                }
            </div>
        </div>
    );

    // route-guard
    return path(['uid'], auth) ? <Redirect to="/" /> : renderSignIn();

};

const mapStateToProps = state => {
    return {
        authError: path(['auth', 'authError'], state),
        auth: path(['firebase', 'auth'], state)
    };
};

export default compose(
    connect(mapStateToProps),
    reduxForm({
        // a unique name for the form
        form: 'signIn',
        onSubmit: (values, dispatch) => {
            dispatch(signIn(values));
        },
    }),
)(SignIn);
