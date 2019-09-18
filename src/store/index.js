import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
// import all reducers from ducks
import auth from './ducks/auth';
import projects from './ducks/projects';

const rootReducer = combineReducers({
    auth,
    projects,
    form: formReducer
});

export default createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
    // other store enhancers if any
));




