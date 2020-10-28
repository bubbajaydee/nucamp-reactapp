import * as ActionTypes from './ActionTypes';

export const comments = (state = { errMess: null, addtlComment:[], comments: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};

        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload};
        
        case ActionTypes.ADD_COMMENT:
            return {...state, errMess: null, addtlComment: state.concat(action.payload)};

        default:
            return state;
    }
};