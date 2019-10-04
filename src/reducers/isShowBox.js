import * as types from './../constants/ActionType';
const defaultState = false;

const isShowBox = (state = defaultState, action) => {
    switch(action.type){
        case types.CLOSE_FORM:
            return false;
        case types.OPEN_FORM:
            return true;
        case types.TOGGLE_BOX:
            return !state;
        default:
            return state;
    }
}

export default isShowBox;