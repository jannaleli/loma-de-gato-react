import * as actionTypes from './actionTypes';

import { API } from 'aws-amplify';
import { DOCUMENT_PATH, LOMA_API_NAME } from '../../aws-configure';
export const getDocuments = (documents) => {
    return {
        type: actionTypes.GET_USER_DOCUMENT,
        documents: documents
    };
};

export const postDocumentSuccess = () => {
    return {
        type: actionTypes.POST_DOCUMENT_SUCCESS
    };
};

export const postDocument = (
    username,
    user_id,
    attachment_id,
    expiration_date,
    government_id,
    reason) => {
        return {
            type: actionTypes.POST_DOCUMENT,
            complaint_id:username,
            attachment_id:user_id,
            complaint_desc:attachment_id,
            create_date:expiration_date,
            latitude:government_id,
            longitude:reason,
            status:user_id

        };

};

export const getDocumentFail = (error) => {
    return {
        type: actionTypes.GET_DOCUMENT_FAIL,
        error: error
    };
};
export const setDocumentFail = (error) => {
    return {
        type: actionTypes.POST_DOCUMENT_FAIL,
        error: error
    };
};
export const postDocumentFail = (error) => {
    return {
        type: actionTypes.POST_DOCUMENT_FAIL,
        error: error
    };
};

export const callPostDocument = (   username,
    user_id,
    attachment_id,
    expiration_date,
    government_id,
    reason) => {

   

    const params = {
        body : {
            'user_id': user_id,
            'username': username,
            'expiration_date': expiration_date,
            'government_id': government_id,
            'attachment_id':attachment_id,
            'reason': reason,
            'status': 'NEW'
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
        .post(LOMA_API_NAME, DOCUMENT_PATH, params)
        .then(response => {
          // Add your code here
        //add success
        })
        .catch(error => {
          console.log(error.response);
          dispatch(setDocumentFail(error.response));
        });
    };
};

export const callGetDocument = (username) => {
           

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
        API
        .get(LOMA_API_NAME, DOCUMENT_PATH  + '/' + { username }, params)
        .then(response => {
          // Add your code here
          dispatch(getDocuments(response.data));
        })
        .catch(error => {
          console.log(error.response);
          dispatch(getDocumentFail(error.response));
       });
    };

};