
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';
const complaintsinitialState = {
    complaints: null,
    error: false,
    success: false
};



const getComplaints = (state, action) => {
    return updateObject (
        state, {
            complaints: 
                action.complaints
            
        }
    )
};

const getComplaintsFailed = (state, action) => {
    return updateObject(state, {error: true});
};

const setComplaintsSuccess = (state, action) => {
    return updateObject(state, {success: true});
};

const complaintsReducer = (state = complaintsinitialState, action) => {
    switch( action.type ){
        case actionTypes.GET_COMPLAINTS : return getComplaints(state, action);
        case actionTypes.SET_COMPLAINT_FAIL : return getComplaintsFailed(state, action);
        case actionTypes.SET_COMPLAINT_SUCCESS : return setComplaintsSuccess(state, action);
        default: return state;
    }
};


export default complaintsReducer;

