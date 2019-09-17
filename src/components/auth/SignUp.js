import React from 'react';

const SignUp = () => (
    <div className="container">
        <div className="row">
            <div className="card">
                <div className="card-body">
                    <form>
                        <h2>Create account</h2>
                        <div className="form-group">
                            <label htmlFor="signupFirstName">First Name</label>
                            <input id="signupFirstName" type="text" maxLength="50" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="signupLastName">Last Name</label>
                            <input id="signupLastName" type="text" maxLength="50" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="signupEmail">Email</label>
                            <input id="signupEmail" type="email" maxLength="50" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="signupPassword">Password</label>
                            <input id="signupPassword" type="password" maxLength="25" className="form-control"
                                   placeholder="at least 6 characters" length="40" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block">Create your
                                account
                            </button>
                        </div>
                        <hr />
                        <p>Already have an account? <a href="#">Sign in</a></p>
                    </form>
                </div>
            </div>
        </div>
    </div>
);

export default SignUp;
