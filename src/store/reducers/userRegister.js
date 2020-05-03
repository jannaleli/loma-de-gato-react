import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    user_id: '',
    address:'',
    attachment_id:'',
    birthdate:'',
    civil_status:'',
    contact_no:'',
    control_no:'',
    createdate:'',
    firstname:'',
    gender:'',
    gross_income:'',
    height:'',
    lastname:'',
    mobilenumber:'',
    password:'',
    place_of_birth:'',
    profession:'',
    tin_no:'',
    username:'',
    weight:'',
    zipcode:'',
    error: false,
    success: false,
    confirmSignUp: false
};
const setRegisterSuccess = (state, action) => {
    return updateObject(state, {success: true});
};

const setUsers = (state, action) => {
    return updateObject (
        state, {
            user_id: action.user_id,
            address:action.address,
            attachment_id:action.attachment_id,
            birthdate:action.birthdate,
            civil_status:action.civil_status,
            contact_no:action.contact_no,
            control_no:action.control_no,
            createdate:action.createdate,
            firstname:action.firstname,
            gender:action.gender,
            gross_income:action.gross_income,
            height:action.height,
            lastname:action.lastname,
            mobilenumber:action.mobilenumber,
            password:action.password,
            place_of_birth:action.place_of_birth,
            profession:action.profession,
            tin_no:action.tin_no,
            username:action.username,
            weight:action.weight,
            zipcode:action.zipcode
            
        }
    )
};

const setUsersFailed = (state, action) => {
    return updateObject(state, {error: action.status});
};

const setConfirmSignUp = (state, action) => {
    return  updateObject(state , {confirmSignUp: true})
}

const userRegisterReducer = (state = initialState, action) => {
    switch( action.type ){
        case actionTypes.POST_USER : return setUsers(state, action);
        case actionTypes.SET_FAIL_USER : return setUsersFailed(state, action);
        case actionTypes.SET_SUCCESS_USER : return setRegisterSuccess(state, action);
        case actionTypes.CONFIRM_SIGN_UP: return setConfirmSignUp(state, action);
        default: return state;
    }
};


export default userRegisterReducer;

