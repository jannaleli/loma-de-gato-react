import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';
const userComplaintInitialState = {
    complaint_id: '',
    attachment_id: '',
    complaint_desc: '',
    create_date: '',
    latitude: '',
    longitude: '',
    status: '',
    type: '',
    user_id: '',
    error: false,
    success: true

};

const setPermitsSuccess = (state, action) => {
    return updateObject(state, {success: true});
};

const postComplaint = (state, action) => {
    const updatedComplaint = {
        complaint_id: action.complaint_id,
        attachment_id: action.attachment_id,
        complaint_desc: action.complaint_desc,
        create_date: action.create_date,
        latitude: action.latitude,
        longitude: action.longitude,
        status: action.status,
        type: action.type,
        user_id: action.user_id

    };

    return updateObject(state, updatedComplaint);

};

const getComplaintsFailed = (state, action) => {
    return updateObject(state, {error: true});
};

const usercomplaintsReducer = (state = userComplaintInitialState, action ) => {
    switch( action.type ){
        case actionTypes.POST_COMPLAINT: return postComplaint(state, action);
        case actionTypes.SET_COMPLAINT_FAIL : return getComplaintsFailed(state, action);
        case actionTypes.SET_COMPLAINT_SUCCESS : return setPermitsSuccess(state, action);
        default: return state;
    }
};

export default usercomplaintsReducer;