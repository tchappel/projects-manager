import React from 'react';
// gets access to .active class when link is active
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/ducks/auth';

const SignedInLinks = ({signOut}) => (
    <React.Fragment>
        <li className="nav-item mr-3">
            <NavLink className="nav-link" to="/create-project">
                New Project
            </NavLink>
        </li>
        <li className="nav-item mr-3">
            <Link className="nav-link" to="#" onClick={signOut}>
                Log Out
            </Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/">NS</Link>
        </li>
    </React.Fragment>
);

const mapDispatch = {
    signOut
};

export default connect(null, mapDispatch)(SignedInLinks);
