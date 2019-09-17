import React from 'react';

const CreateProject = () => (
    <div className="container">
        <div className="row">
            <div className="card">
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <h2>Create new Project</h2>
                        </div>
                        <div className="form-group">
                            <label htmlFor="createProjectTitle">Title</label>
                            <input id="createProjectTitle" type="text" maxLength="50" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="createProjectSubtitle">Subtitle</label>
                            <input id="createProjectSubtitle" type="text" maxLength="50" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="createProjectDescription">Description</label>
                            <textarea id="createProjectDescription" className="form-control" />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block">Create Project</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
);

export default CreateProject;
