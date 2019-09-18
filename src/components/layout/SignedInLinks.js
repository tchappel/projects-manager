import React from 'react';
// gets access to .active class when link is active
import { NavLink, Link } from 'react-router-dom';

const SignedInLinks = () => (
    <React.Fragment>
        <li className="nav-item">
            <NavLink className="nav-link" to="/create-project">
                New Project
            </NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/">
                Log Out
            </NavLink>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/">NS</Link>
        </li>
    </React.Fragment>
);

export default SignedInLinks;
