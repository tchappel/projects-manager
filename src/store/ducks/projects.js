import { path } from 'ramda';

const initialState = {
    data: [
        {
            id: '1',
            title: 'Project Title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet consectetur, adipisicing elit.'
        },
        {
            id: '2',
            title: 'Project Title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet consectetur, adipisicing elit.'
        },
        {
            id: '3',
            title: 'Project Title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet consectetur, adipisicing elit.'
        },
    ]
};

// Action Types
const CREATE_PROJECT = 'CREATE_PROJECT';
// Action creators

// Thunks
// thunks are actions that dispatch actions after having performed async procedures
export const createProject = (project) => {
    return (dispatch, getState) => {
        dispatch({
            type: CREATE_PROJECT,
            payload: project
        });
    };
};

// selectors
// credit to https://tommmyy.github.io/ramda-react-redux-patterns/pages/redux-ramda.html
export const selectProjects = state => path(['projects', 'data'], state);

// reducer
export default (state = initialState, action) => {
    return state;
};
