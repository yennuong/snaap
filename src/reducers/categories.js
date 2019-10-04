import * as types from './../constants/ActionType';

let defaultState = [
    {
        name: 'Electronics',
        image: 'electronics.svg',
    },
    {
        name: 'Men Fashion',
        image: 'men-clothes.svg',
    },
    {
        name: 'Women Fashion',
        image: 'women-clothes.svg',
    },
    {
        name: 'Beauty',
        image: 'beauty.svg',
    },
    {
        name: 'Book Tickets',
        image: 'book-tickets.svg',
    },
    {
        name: 'Furniture',
        image: 'furniture.svg',
    },
    {
        name: 'Sports',
        image: 'sports.svg',
    },
    {
        name: 'Kids',
        image: 'kids.svg',
    },
    {
        name: 'Car - Bike',
        image: 'car-bike.svg',
    },
    {
        name: 'Belongings',
        image: 'belongings.svg',
    }
];


const categories = (state = defaultState, action) => {
    switch(action.type){
        case types.LIST_CATEGORIES:
            return state;
        default:
            return state;
    }
}

export default categories;