import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const authinitialState = {
    user: null,
    error: false
};


const authUsers = (state, action) => {
    return updateObject (
        state, {
            user: 
                action.user
            
        }
    )
};

const authUsersFailed = (state, action) => {
    return updateObject(state, {error: true});
};

const authReducer = (state = authinitialState, action) => {
    switch( action.type ){

        case actionTypes.SIGN_IN_USER : return authUsers(state, action);
        case actionTypes.SIGN_IN_USER_FAIL : return authUsersFailed(state, action);
        default: return state;
    }
};


export default authReducer;

