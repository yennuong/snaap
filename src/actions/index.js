import * as types from './../constants/ActionType';

export const actListProduct = () => {
	return {
		type : types.LIST_PRODUCT
	}
}
export const actListCategories = () => {
	return {
		type : types.LIST_CATEGORIES
	}
}
export const actBuyProduct = (product, quantity) => {
	return {
		type : types.BUY_PRODUCT,
		product, 
		quantity
	}
}

export const actUpdateProduct = (product, quantity) => {
	return {
		type : types.UPDATE_PRODUCT,
		product, 
		quantity
	}
}

export const actRemoveProduct = (product) => {
	return {
		type : types.REMOVE_PRODUCT,
		product, 
	}
}

export const actChangeNotify = (content) => {
	return {
		type : types.CHANGE_NOTIFY,
		content
	}
}
export const actToggleForm = () => {
	return {
		type : types.TOGGLE_FORM
	}
}