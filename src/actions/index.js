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
export const actCloseForm = () => {
	return {
		type : types.CLOSE_FORM
	}
}

export const actOpenForm = () => {
	return {
		type : types.OPEN_FORM
	}
}

export const actToggleForm = () => {
	return {
		type : types.TOGGLE_FORM
	}
}
export const actToggleBox = () => {
	return {
		type : types.TOGGLE_BOX
	}
}
export const actSort = (orderBy, orderDir) => {
	return {
		type : types.SORT_ITEM,
		orderBy,
		orderDir
	}
}