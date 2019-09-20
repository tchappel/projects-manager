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
    ],
    error: null,
    isLoading: false,
};

// Action Types
const CREATE_PROJECT_REQUEST = 'CREATE_PROJECT_REQUEST';
const CREATE_PROJECT_SUCCESS = 'CREATE_PROJECT_SUCCESS';
const CREATE_PROJECT_FAILURE = 'CREATE_PROJECT_FAILURE';

// Action creators

// selectors
// this selector works after store is enhanced in sync with firestore
export const selectProjects = state => path(['firestore', 'ordered', 'projects'], state);

// Thunks
export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {

        dispatch({type: CREATE_PROJECT_REQUEST});

        // reference to firestore database
        const firestore = getFirestore();

        // make async call to database
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Net',
            authorLastName: 'Net',
            authorId: '12345',
            createdAt: new Date()
        }).then(() => {
            dispatch({type: CREATE_PROJECT_SUCCESS, payload: project});
        }).catch(error => {
            dispatch({type: CREATE_PROJECT_FAILURE, payload: error});
        });
    };
};

// reducer
export default (state = initialState, action) => {
    if (action.type === CREATE_PROJECT_REQUEST) {
        return ({
            ...state,
            isLoading: true,
            error: null
        });
    }

    if (action.type === CREATE_PROJECT_FAILURE) {
        return ({
            ...state,
            isLoading: false,
            error: action.payload
        });
    }

    if (action.type === CREATE_PROJECT_SUCCESS) {
        return ({
            ...state,
            data: [...state.data, action.payload],
            isLoading: false,
        });
    }

    return state;
};
