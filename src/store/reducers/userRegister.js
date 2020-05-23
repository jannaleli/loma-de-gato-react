import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    userInfo: null,
    errorSignUp: false,
    successSignUp: false,
    confirmSignUp: false,
    confirmSignUpSuccess: false,
    confirmSignUpError: false,
    saveData: false,
    saveDataSuccess: false,
    saveDataError: false
};
const setSaveDataSuccess = (state, action) => {
    return updateObject(state, {saveDataSuccess: true, saveData: false, confirmSignUp: false, confirmSignUpError: false, confirmSignUpSuccess: false, errorSignUp: false, successSignUp: false});
};
const setSaveDataError = (state, action)=> {
    return updateObject(state,{saveDataError: false})
}

const setErrorSignUp = (state, action) => {
    return updateObject(state, {errorSignUp: true})
};

const setSuccessSignUp = (state, action) => {
    return updateObject(state, {successSignUp: true})
}


const confirmSignUpSuccess = (state, action) => {
    return updateObject(state, {confirmSignUpSuccess: true})
}

const confirmSignUpError = (state, action) => {
    return updateObject(state, {confirmSignUpError: true})
}

const setUsers = (state, action) => {
    return updateObject (
        state, {
            userInfo: action.userInfo
            
        }
    )
};

const setConfirmSignUp = (state, action) => {
    return  updateObject(state , {confirmSignUp: true})
}

const userRegisterReducer = (state = initialState, action) => {
    switch( action.type ){
        case actionTypes.POST_USER : return setUsers(state, action);
        case actionTypes.SET_FAIL_USER : return setSaveDataError(state, action);
        case actionTypes.SET_SUCCESS_USER : return setSaveDataSuccess(state, action);
        case actionTypes.CONFIRM_SIGN_UP: return setConfirmSignUp(state, action);
        case actionTypes.CONFIRM_SIGN_UP_SUCCESS: return confirmSignUpSuccess(state,action);
        case actionTypes.CONFIRM_SIGN_UP_ERROR: return confirmSignUpError(state, action);
        case actionTypes.SAVE_DATA_SUCCESS: return setSaveDataSuccess(state, action);
        case actionTypes.SAVE_DATA_ERROR: return setSaveDataError(state, action);
        case actionTypes.SET_ERROR_SIGN_UP: return setSuccessSignUp(state, action);
        case actionTypes.SET_SUCCESS_SIGN_UP: return setErrorSignUp(state,action);
        default: return state;
    }
};


export default userRegisterReducer;