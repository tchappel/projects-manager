import React from 'react';

const SignIn = () => (
    <div className="container">
        <div className="row">
            <div className="card">
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <h2>Login to account</h2>
                        </div>
                        <div className="form-group">
                            <label htmlFor="signinEmail">Email</label>
                            <input id="signinEmail" type="email" maxLength="50" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="signinPassword">Password</label>
                            <input id="signupPassword" type="password" maxLength="25" className="form-control"
                                   placeholder="at least 6 characters" length="40" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block">Sign In to your
                                account
                            </button>
                        </div>
                        <hr />
                        <p>Don't have an account? <a href="#">Sign up</a></p>
                    </form>
                </div>
            </div>
        </div>
    </div>
);

export default SignIn;
