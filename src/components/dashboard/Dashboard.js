import React from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';

const Dashboard = () => (
    <div className="container">
        <div className="row">
            <div className="col-6 bg-light">
                <ProjectList />
            </div>
            <div className="col-6 bg-light">
                <Notifications />
            </div>
        </div>
    </div>
);

export default Dashboard;
