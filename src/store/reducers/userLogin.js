import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    user: null,
    error: false,
    success: true
};


const setUsers = (state, action) => {
    return updateObject (
        state, {
            user: 
                action.user
            
        }
    )
};

const setUsersFailed = (state, action) => {
    return updateObject(state, {error: true});
};

const setLoginSuccess = (state, action) => {
    return updateObject(state, {success: true});
};

const userLoginReducer = (state = initialState, action) => {
    switch( action.type ){
        case actionTypes.GET_USER : return setUsers(state, action);
        case actionTypes.GET_FAIL_USER : return setUsersFailed(state, action);
        case actionTypes.GET_SUCCESS_USER: return setLoginSuccess(state, action);
        default: return state;
    }
};


export default userLoginReducer;

