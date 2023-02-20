// Libraries
import { combineReducers } from 'redux';

// Reducers
import { authUserReducer } from './authUser/AuthUserReducers';

const rootReducers = combineReducers({
	authUserReducer,
});

export default rootReducers;
