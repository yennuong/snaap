import * as types from './../constants/ActionType';

let defaultState = [
	{
		id: '1',
		name: 'APPLE iPhone 8 Plus  (5.5” LED-backlit IPS LCD/RAM 3GB/64GB/Gold)\n' +
			'                  ',
		image: 'item01.jpg',
		summary: '12 ',
		price: 15000000,
		canBuy: true
	},
	{
		id: '2',
		name: 'APPLE iPhone 8 Plus  (5.5” LED-backlit IPS LCD/RAM 3GB/64GB/Gold)\n' +
			'                  ',
		image: 'item01.jpg',
		summary: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt quas, magnam perferendis ',
		price: 15000000,
		canBuy: true
	},
	{
		id: '3',
		name: 'robo fig combo',
		image: 'item01.jpg',
		summary: 'APPLE iPhone 8 Plus  (5.5” LED-backlit IPS LCD/RAM 3GB/64GB/Gold)\n' +
			'                   ',
		price: 15000000,
		canBuy: true
	},
	{
		id: '4',
		name: 'target leap frog',
		image: 'item01.jpg',
		summary: 'APPLE iPhone 8 Plus  (5.5” LED-backlit IPS LCD/RAM 3GB/64GB/Gold)\n' +
			'                   ',
		price: 15000000,
		canBuy: false
	}
];


const products = (state = defaultState, action) => {

	switch(action.type){
		case types.LIST_PRODUCT:
			return state;
		default:
			return state;
	}
}

export default products;