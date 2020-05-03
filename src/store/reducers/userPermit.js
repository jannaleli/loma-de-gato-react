
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';
const userpermitinitialState = {
    username: '',
    user_id:'',
    approval_date:'',
    business_activity:'',
    business_building_no:'',
    business_name:'',
    business_street:'',
    capitalization:'',
    ctc_no:'',
    gross_sale:'',
    lessor_barangay:'',
    lessor_bldg_no:'',
    lessor_city:'',
    lessor_emailaddr:'',
    lessor_name:'',
    lessor_province:'',
    lessor_street:'',
    lessor_subdv:'',
    monthly_rental:'',
    sec_no:'',
    status:'',
    error: false,
    success: true
};



const setUserPermits = (state, action) => {
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

const setUserPermitsFailed = (state, action) => {
    return updateObject(state, {error: true});
};
const setPermitsSuccess = (state, action) => {
    return updateObject(state, {success: true});
};

const userPermitsReducer = (state = userpermitinitialState, action) => {
    switch( action.type ){
        case actionTypes.POST_PERMIT : return setUserPermits(state, action);
        case actionTypes.POST_PERMIT_FAIL : return setUserPermitsFailed(state, action);
        case actionTypes.SET_SUCCESS_PERMIT : return setPermitsSuccess(state, action);
        default: return state;
    }
};

export default userPermitsReducer;
