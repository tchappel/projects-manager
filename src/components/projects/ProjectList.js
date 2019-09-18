import React from 'react';
import { and, isNil, isEmpty } from 'ramda';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({projects}) => (
    <React.Fragment>
        {
            and(!isNil(projects), !isEmpty(projects)) &&
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
