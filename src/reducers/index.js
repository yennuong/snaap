import { combineReducers } from 'redux';
import products from './products';
import categories from './categories';
import carts from './carts';
import notify from './notify';
import isShowForm from './isShowForm';

const appReducers = combineReducers({
	products,
	notify,
	carts,
	categories,
	isShowForm
});

export default appReducers;