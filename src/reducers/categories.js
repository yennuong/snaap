import * as types from './../constants/ActionType';

let defaultState = [
    {
        name: 'Electronics'
    },
    {
        name: 'Men Fashion'
    },
    {
        name: 'Women Fashion'
    },
    {
        name: 'Beauty'
    },
    {
        name: 'Book Tickets'
    },
    {
        name: 'Furniture'
    },
    {
        name: 'Sports'
    },
    {
        name: 'Kids'
    },
    {
        name: 'Car - Bike'
    },
    {
        name: 'Belongings'
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