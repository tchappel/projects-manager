import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { path } from 'ramda';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = ({auth = {}}) => (
    <nav className="navbar bg-dark navbar-dark justify-content-between flex-nowrap flex-row">
        <div className="container">
            <Link to="/" className="navbar-brand float-left">ProjectsManager</Link>
            <ul className="nav navbar-nav flex-row float-right">
                {
                    path(['uid'], auth)
                        ? <SignedInLinks />
                        : <SignedOutLinks />
                }

            </ul>
        </div>
    </nav>
);

const mapState = state => {
    return {
        auth: path(['firebase', 'auth'], state)
    };
};

export default connect(mapState)(Navbar);
