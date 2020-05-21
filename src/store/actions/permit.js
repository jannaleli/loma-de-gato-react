import * as actionTypes from './actionTypes';

import { PERMIT_PATH, LOMA_API_NAME } from '../../aws-configure';
import { API } from 'aws-amplify';
export const getPermit = (permits) => {
    return {
        type: actionTypes.GET_PERMITS,
        permits: permits
    };
};



export const postPermits = (
    username,
    user_id,
    approval_date,
    business_activity,
    business_building_no,
    business_name,
    business_street,
    capitalization,
    ctc_no,
    gross_sale,
    lessor_barangay,
    lessor_bldg_no,
    lessor_city,
    lessor_emailaddr,
    lessor_name,
    lessor_province,
    lessor_street,
    lessor_subdv,
    monthly_rental,
    sec_no,
    status

    ) => {
        return {
            type: actionTypes.POST_DOCUMENT,
            username: username,
            user_id:user_id,
            approval_date:approval_date,
            business_activity:business_activity,
            business_building_no:business_building_no,
            business_name:business_name,
            business_street:business_street,
            capitalization:capitalization,
            ctc_no:ctc_no,
            gross_sale:gross_sale,
            lessor_barangay:lessor_barangay,
            lessor_bldg_no:lessor_bldg_no,
            lessor_city:lessor_city,
            lessor_street:lessor_street,
            sec_no: sec_no,
            lessor_emailaddr:lessor_emailaddr,
            lessor_name:lessor_name,
            lessor_province:lessor_province,
            lessor_street:username,
            lessor_subdv:lessor_subdv,
            monthly_rental:monthly_rental,
            sec_no:sec_no,
            status:status

        };

};

export const getPermitsFail = (error) => {
    return {
        type: actionTypes.GET_FAIL_PERMIT,
        error: error
    };
};

export const postPermitsFail = (error) => {
    return {
        type: actionTypes.POST_PERMIT_FAIL,
        error: error
    };
};


export const postPermitsSuccess = () => {
    return {
        type: actionTypes.SET_SUCCESS_PERMIT
    };
};


export const callPostDocument = (       username,
    user_id,
    approval_date,
    business_activity,
    business_building_no,
    business_name,
    business_street,
    capitalization,
    ctc_no,
    gross_sale,
    lessor_barangay,
    lessor_bldg_no,
    lessor_city,
    lessor_emailaddr,
    lessor_name,
    lessor_province,
    lessor_street,
    lessor_subdv,
    monthly_rental,
    sec_no,
    status,
    no_of_unit) => {

   

    const params = {
        body : {
            'user_id': user_id,
            'username': username,
            'attachment_id': 'attachment_id',
            'sec_no': sec_no,
            'business_building_no': business_building_no,
            'business_street': business_street,
            'business_activity': business_activity,
            'business_name': business_name,
            'capitalization': capitalization,
            'ctc_no': ctc_no,
            'lessor_barangay': lessor_barangay,
            'lessor_bldg_no': lessor_bldg_no,
            'lessor_city': lessor_city,
            'lessor_emailaddr': lessor_emailaddr,
            'lessor_name': lessor_name,
            'lessor_province': lessor_province,
            'lessor_street': lessor_street,
            'lessor_subdv': lessor_subdv,
            'monthly_rental': monthly_rental,
            'no_units': no_of_unit,
            'status': status,
            'gross_sale': gross_sale,
            'approval_date': approval_date
        },
        headers : {
            'Content-Type': 'application/json',
            'Accept': '*/*',
            'Host': 'mjdjlvb5x9.execute-api.ap-southeast-1.amazonaws.com',
            'Accept-Encoding': 'gzip, deflate',
            'Content-Length': '243',
            'Connection': 'keep-alive',
        },
    };
    return dispatch => {
        API
        .post(LOMA_API_NAME, PERMIT_PATH, params)
        .then(response => {
          // Add your code here
          console.log(response);
        })
        .catch(error => {
          console.log(error);
          dispatch(postPermitsFail(error));
        });
    };
};

export const callGetPermit = (username) => {
           

    const params = {
        headers : {
            'Content-Type': 'application/json',
            'Accept': '*/*',
            'Host': 'mjdjlvb5x9.execute-api.ap-southeast-1.amazonaws.com',
            'Accept-Encoding': 'gzip, deflate',
            'Content-Length': '243',
            'Connection': 'keep-alive',
        },

    };
    return dispatch => {
        //console.log(username)
        const queryParams =  PERMIT_PATH  + '/' +  'bom@gmail.com'
        API
        .get(LOMA_API_NAME, queryParams, params)
        .then(response => {
          // Add your code here
          console.log(response);
          dispatch(getPermit(response));
        })
        .catch(error => {
          console.log(error);
          dispatch(getPermitsFail(error));
       });
    };

};