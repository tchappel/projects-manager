import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => (
    <nav className="navbar bg-dark navbar-dark justify-content-between flex-nowrap flex-row">
        <div className="container">
            <Link to="/" className="navbar-brand float-left">ProjectsManager</Link>
            <ul className="nav navbar-nav flex-row float-right">
                <SignedInLinks />
                <SignedOutLinks />
            </ul>
        </div>
    </nav>
);

export default Navbar;
