import * as types from './../constants/ActionType';

let defaultState = [
    {
        name: 'men'
    },
    {
        name: 'men'
    },
    {
        name: 'men'
    },
    {
        name: 'men'
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