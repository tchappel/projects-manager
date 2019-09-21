import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { path, compose } from 'ramda';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import TextInput from '../form/TextInput';

const SignUp = ({auth = {}}) => {
    const renderSignUp = () => (
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-body">
                        <form>
                            <h2>Create account</h2>
                            <Field
                                name="email"
                                label="Email"
                                type="email"
                                component={TextInput}
                            />
                            <Field
                                name="firstName"
                                label="First Name"
                                type="text"
                                component={TextInput}
                            />
                            <Field
                                name="lastName"
                                label="Last Name"
                                type="text"
                                component={TextInput}
                            />
                            <Field
                                name="password"
                                label="Password"
                                type="password"
                                component={TextInput}
                            />
                            <div className="form-group">
                                <button type="submit" className="btn btn-primary btn-block">
                                    Create your account
                                </button>
                            </div>
                            <hr />
                            <p>Already have an account? <Link to="/signin">Sign in</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

    // route-guard
    return path(['uid'], auth) ? <Redirect to="/" /> : renderSignUp();
};

const mapState = state => {
    return {
        auth: path(['firebase', 'auth'], state)
    };
};

export default compose(
    connect(mapState),
    reduxForm({
        // a unique name for the form
        form: 'signUp',
    }),
)(SignUp);
