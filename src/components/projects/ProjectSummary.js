import React from 'react';

const ProjectSummary = ({project: {title, description}}) => (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">posted by</h6>
            <h6 className="card-subtitle mb-2 text-muted">posted on</h6>
            <p className="card-text">{description}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
);

export default ProjectSummary;
