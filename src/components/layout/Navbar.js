import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => (
    <nav className="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
        <a className="navbar-brand" href="#">ProjectsManager</a>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navb"
                aria-expanded="true">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navb" className="navbar-collapse collapse hide">
            <ul className="navbar-nav invisible">
                <li className="nav-item active">
                    <Link to='/' className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Page 1</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Page 2</a>
                </li>
            </ul>

            <ul className="nav navbar-nav ml-auto">
                <SignedInLinks />
                <SignedOutLinks />
            </ul>
        </div>
    </nav>
);

export default Navbar;
