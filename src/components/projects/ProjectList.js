import React from 'react';
import { isEmpty } from 'ramda';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({projects = []}) => (
    <React.Fragment>
        {
            !isEmpty(projects) &&
            projects.map(project => (
                <ProjectSummary
                    key={project.id}
                    project={project}
                />
            ))
        }
    </React.Fragment>
);

export default ProjectList;
