import React from 'react';

// access route params by props/match/params/id

const ProjectDetails = ({match: {params: {id}}}) => (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">Project Title - #{id}</h5>
            <h6 className="card-subtitle mb-2 text-muted">posted by</h6>
            <h6 className="card-subtitle mb-2 text-muted">posted on</h6>
            <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
        </div>
    </div>
);

export default ProjectDetails;

