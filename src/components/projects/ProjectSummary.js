import React from 'react';
import { Link } from 'react-router-dom';

const ProjectSummary = ({project: {title, description, id}}) => (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">posted by</h6>
            <h6 className="card-subtitle mb-2 text-muted">posted on</h6>
            <p className="card-text">{description}</p>
            <Link to={`/project/${id}`} className="btn btn-primary">See project details</Link>
        </div>
    </div>
);

export default ProjectSummary;
