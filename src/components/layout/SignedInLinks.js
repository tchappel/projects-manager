import React from 'react';
// gets access to .active class when link is active
import { NavLink } from 'react-router-dom';

const SignedInLinks = () => (
    <React.Fragment>
        <li className="nav-item">
            <NavLink className="nav-link" to="/">
                New Project
            </NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/">
                Log Out
            </NavLink>
        </li>
        <li>
            <span className="nav-link">NS</span>
        </li>
    </React.Fragment>
);

export default SignedInLinks;
