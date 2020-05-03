import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const userDocumentsinitialState = {
    username: '',
    user_id:'',
    attachment_id:'',
    expiration_date:'',
    government_id:'',
    reason:'',
    error: false,
    success: true
};

const setDocumentsSuccess = (state, action) => {
    return updateObject(state, {success: true});
};

const setUserDocuments = (state, action) => {
    return updateObject (
        state, {
            username: action.username,
            user_id:action.user_id,
            attachment_id:action.attachment_id,
            expiration_date:action.expiration_date,
            government_id:action.government_id,
            reason:action.reason
            
        }
    )
};

const setUserDocumentsFailed = (state, action) => {
    return updateObject(state, {error: true});
};

const userDocumentsReducer = (state = userDocumentsinitialState, action) => {
    switch( action.type ){
        case actionTypes.POST_DOCUMENT : return setUserDocuments(state, action);
        case actionTypes.POST_DOCUMENT_FAIL : return setUserDocumentsFailed(state, action);
        case actionTypes.POST_DOCUMENT_SUCCESS : return setDocumentsSuccess(state, action);
        default: return state;
    }

};

export default userDocumentsReducer;
