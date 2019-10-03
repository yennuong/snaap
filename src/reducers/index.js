import { combineReducers } from 'redux';
import products from './products';
import categories from './categories';
import carts from './carts';
import notify from './notify';

const appReducers = combineReducers({
	products,
	notify,
	carts,
	categories
});

export default appReducers;