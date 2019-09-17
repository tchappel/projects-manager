import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignUp from './components/auth/SignUp';
import SignIn from './components/auth/SignIn';
import CreateProject from './components/projects/CreateProject';

const App = () => (
    /* Enables using rout inside App Component */
    <BrowserRouter>
        <Navbar />
        {/*Switch makes sure that only one route is rendered, the first that matches the url*/}
        <Switch>
            {/* exact attribute == only exact match with url */}
            <Route exact path="/" component={Dashboard} />
            {/*:id is a route parameter*/}
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <Route path="/create-project" component={CreateProject} />
        </Switch>
    </BrowserRouter>
);

export default App;
