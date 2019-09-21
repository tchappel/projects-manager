import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';
// sync the App state with Firestore data
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import fbConfig from '../config/fbConfig';
// import all reducers from ducks
import auth from './ducks/auth';
import projects from './ducks/projects';


const rootReducer = combineReducers({
    auth,
    projects,
    form: formReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
});

export default createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    // other store enhancers if any
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig, {attachAuthIsReady: true}),
));




