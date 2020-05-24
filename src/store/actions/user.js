import * as actionTypes from './actionTypes';
import { Auth } from 'aws-amplify';
import { randomString } from '../../shared/utility';
import { API } from 'aws-amplify';
import { USER_PATH, LOMA_API_NAME } from '../../aws-configure';



export const getUser = (users) => {
    return {
        type: actionTypes.GET_USER,
        users: users
    };
};



export const postUsers = (
    user_id,
    address,
    attachment_id,
    birthdate,
    civil_status,
    contact_no,
    control_no,
    createdate,
    firstname,
    gender,
    gross_income,
    height,
    lastname,
    mobilenumber,
    password,
    place_of_birth,
    profession,
    tin_no,
    username,
    weight,
    zipcode

    ) => {
        return {
            user_id: user_id,
            address:address,
            attachment_id:attachment_id,
            birthdate:birthdate,
            civil_status:civil_status,
            contact_no:contact_no,
            control_no:control_no,
            createdate:createdate,
            contact_no:contact_no,
            firstname:firstname,
            gender:gender,
            gross_income:gross_income,
            height:height,
            lastname:lastname,
            mobilenumber:mobilenumber,
            password:password,
            place_of_birth:place_of_birth,
            profession:profession,
            tin_no:tin_no,
            username:username,
            weight:weight,
            zipcode:zipcode

        };

};

export const loginUserSuccess = () => {
    return {
        type: actionTypes.GET_SUCCESS_USER
    };
};

export const registerUserSuccess = () => {
    console.log('Register User Access')
    return {
        type: actionTypes.SET_SUCCESS_USER
    };
};

export const getUserFail = (error) => {
    return {
        type: actionTypes.GET_FAIL_USER,
        error: error
    };
};

export const setUserFail = (error) => {
    return {
        type: actionTypes.SET_FAIL_USER,
        error: error
    };
};

export const confirmSignUp = () => {
    return {
        type: actionTypes.CONFIRM_SIGN_UP,
        status: true
    };
};

export const confirmSignUpSuccess = ()  => {
    return {
        type: actionTypes.CONFIRM_SIGN_UP_SUCCESS
    }
}

export const signUp =  (email, password) => {

    return async (dispatch) => {
        try {
            console.log('register')
            console.log(email)
            console.log(password)
            const user = await Auth.signUp({
              username:  email,
              password:  password
            });
            console.log({ user });
     
            dispatch(confirmSignUp())
           
        } catch (error) {
            console.log('error signing up:', error);
            dispatch(setUserFail(error))
        }
    }

}

export  const signIn =  (email, password) => {

    return async (dispatch) => {
        try {
            const user = await Auth.signIn(email, password);
            callGetUser(email);
        } catch (error) {
            console.log('error signing in', error);
            dispatch(getUserFail(error));
        }
    }

}

export  const confirmTheSignUp =  (userInfo,code) => {
    return async (dispatch) => {
        try {
            await Auth.confirmSignUp(userInfo.email, code);
            console.log('when did you happen')
            dispatch(callRegisterUser(userInfo));
          } catch (error) {
              console.log('error confirming sign up', error);
              dispatch(setUserFail(error))
          }
    }

}

export  const signOut = async () => {
    return async (dispatch) => {
        try {
            await Auth.signOut();
        } catch (error) {
            console.log('error signing out: ', error);
        } 
    }

};

export const callRegisterUser = ( userInfo) => {
           console.log(userInfo.email)
           console.log(userInfo.password)
           console.log(userInfo.address)
           console.log( userInfo.birthDate)
           console.log(userInfo.firstName)
           console.log(userInfo.lastName)
           console.log(userInfo.phone)
           console.log(userInfo.zipNumber)
           console.log(userInfo.civilStatus)
           console.log(userInfo.tinNumber)
           console.log(userInfo.birthPlace)
           console.log(userInfo.weight)
           console.log(userInfo.height)
           console.log(userInfo.phone)
           console.log(userInfo.profession)
           console.log(userInfo.grossIncome)
           console.log( userInfo.gender)



    const params = {
        body : {
            'user_id': userInfo.email,
            'username': userInfo.email ,
            'password': userInfo.password,
            'address': userInfo.address,
            'birthdate': userInfo.birthDate,
            'createdate': userInfo.birthDate,
            'firstname': userInfo.firstName,
            'lastname': userInfo.lastName,
            'mobilenumber': userInfo.phone,
            'zipcode': userInfo.zipNumber,
            'civil_status': userInfo.civilStatus,
            'ctc_no': randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
            'tin_no': userInfo.tinNumber,
            'place_of_birth': userInfo.birthPlace,
            'weight': userInfo.weight,
            'height': userInfo.height,
            'control_no': randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'),
            'contact_no': userInfo.phone,
            'profession': userInfo.profession,
            'gross_income': userInfo.grossIncome,
            'attachment_id': 'hello',
            'gender': userInfo.gender,
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
    console.log( params);
    return dispatch => {
        console.log( 'calling the API')
        console.log( LOMA_API_NAME)
        console.log( USER_PATH)
        API
        .post(LOMA_API_NAME, USER_PATH, params)
        .then(response => {
          // Add your code here
          console.log(response)
          console.log('what is happening here')
          dispatch(registerUserSuccess());
        })
        .catch(error => {
          console.log(error);
          dispatch(setUserFail(error));
        });
    };

};


export const callGetUser = (username) => {
           

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
        .get(LOMA_API_NAME, USER_PATH  + '/' + { username }, params)
        .then(response => {
          // Add your code here
          dispatch(getUser(response.data));
        })
        .catch(error => {
          console.log(error.response);
          dispatch(getUserFail(error.response));
       });
    };

};