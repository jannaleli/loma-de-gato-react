
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';
const permitinitialState = {
    permit: null,
    error: false
};



const setPermits = (state, action) => {
    return updateObject (
        state, {
               username: action.username,
               user_id:action.user_id,
               approval_date:action.approval_date,
               business_activity:action.business_activity,
               business_building_no:action.business_building_no,
               business_name:action.business_name,
               business_street:action.business_street,
               capitalization:action.capitalization,
               ctc_no:action.ctc_no,
               gross_sale:action.gross_sale,
               lessor_barangay:action.lessor_barangay,
               lessor_bldg_no:action.lessor_bldg_no,
               lessor_city:action.v,
               lessor_emailaddr:action.lessor_emailaddr,
               lessor_name:action.lessor_name,
               lessor_province:action.lessor_province,
               lessor_street:action.username,
               lessor_subdv:action.lessor_subdv,
               monthly_rental:action.monthly_rental,
               sec_no:action.sec_no,
               status:action.status
            
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
