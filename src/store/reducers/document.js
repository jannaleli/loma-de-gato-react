
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';
const documentInitialState = {
    documents: null,
    error: false
};



const getDocuments = (state, action) => {
    return updateObject (
        state, {
               documents: document
            
        }
    )
};

const getDocumentsFailed = (state, action) => {
    return updateObject(state, {error: true});
};

const documentsReducer = (state = documentInitialState, action) => {
    switch( action.type ){
        case actionTypes.GET_USER_DOCUMENT : return getDocuments(state, action);
        case actionTypes.GET_DOCUMENT_FAIL : return getDocumentsFailed(state, action);
        
        default: return state;
    }
};

export default documentsReducer;
