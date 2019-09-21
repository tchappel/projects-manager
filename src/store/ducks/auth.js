const initialState = {
    authError: null
};

// Action Types
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_ERROR = 'LOGIN_ERROR';

const SIGNOUT_REQUEST = 'SIGNOUT_REQUEST';
const SIGNOUT_SUCCESS = 'SIGNOUT_SUCCESS';
const SIGNOUT_ERROR = 'SIGNOUT_ERROR';

// Thunks
export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
            .then(() => {
                dispatch({type: LOGIN_SUCCESS});
            })
            .catch(error => {
                dispatch({type: LOGIN_ERROR, payload: error});
            });
    };
};

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        dispatch({type: SIGNOUT_REQUEST});
        const firebase = getFirebase();
        firebase.auth().signOut()
            .then(() => {
                dispatch({type: SIGNOUT_SUCCESS});
            })
            .catch(error => {
                dispatch({type: SIGNOUT_ERROR, payload: error});
            });
    };
};

// reducer
export default (state = initialState, action) => {
    if (action.type === LOGIN_ERROR) {
        return {
            ...state,
            authError: action.payload,
        };
    }
    if (action.type === LOGIN_SUCCESS) {
        return {
            ...state,
            authError: null,
        };
    }
    return state;
};
