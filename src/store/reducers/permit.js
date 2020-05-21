
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';
const permitinitialState = {
    permit: null,
    error: false
};



const setPermits = (state, action) => {
    return updateObject (
        state, {
            permit: action.permits
            
        }
    )
};

const setPermitsFailed = (state, action) => {
    return updateObject(state, {error: true});
};

const permitsReducer = (state = permitinitialState, action) => {
    switch( action.type ){
        case actionTypes.GET_PERMITS : return setPermits(state, action);
        case actionTypes.GET_FAIL_PERMIT : return setPermitsFailed(state, action);
        
        default: return state;
    }
};

export default permitsReducer;
