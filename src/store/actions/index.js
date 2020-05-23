

export  {
    getComplaints,
    postComplaint,
    getComplaintFail,
    postComplaintFail,
    callGetComplaint

} from './complaint';

export {
    callGetDocument,
    callPostDocument,
    getDocumentFail,
    postDocumentFail

} from './document';

export {
    getEvents,
    getEventstFail,
    callGetEvents

} from './events';

export {
    callGetPermit,
    callPostPermit,
    getPermitsFail,
    postPermitsFail

} from './permit';

export {
    
    postUsers,
    loginUserSuccess,
    registerUserSuccess,
    getUserFail,
    setUserFail,
    confirmSignUp,
    signUp,
    signIn,
    confirmTheSignUp,
    signOut,
    getUser,
    callRegisterUser

} from './user'