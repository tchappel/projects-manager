import React from 'react';
// gets access to .active class when link is active
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => (
    <React.Fragment>
        <li className="nav-item">
            <NavLink className="nav-link" to="/signup">
                Sign Up
            </NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/signin">
                Login
            </NavLink>
        </li>
    </React.Fragment>
);

export default SignedOutLinks;
