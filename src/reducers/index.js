import { combineReducers } from 'redux';
import products from './products';
import categories from './categories';
import carts from './carts';
import notify from './notify';
import isShowBox from './isShowBox';
import isShowForm from './isShowForm';
import sort from './sort';

const appReducers = combineReducers({
	products,
	notify,
	carts,
	categories,
	isShowBox,
	isShowForm,
	sort
});

export default appReducers;