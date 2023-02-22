// Libraries
import { combineReducers } from 'redux';

// Reducers
import { authUserReducer } from './authUser/AuthUserReducers';
import { productReducer } from './product/ProductReducers';
import { itemReducer } from './item/ItemReducers';

const rootReducers = combineReducers({
	authUserReducer,
	productReducer,
	itemReducer
});

export default rootReducers;
