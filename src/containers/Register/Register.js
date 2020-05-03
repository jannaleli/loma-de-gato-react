import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Amplify, { API, Auth } from 'aws-amplify';

class Register extends Component {
    render () {
       
        return <div><h1>Register</h1></div>;
    } 
};


const mapStateToProps = state => {
    return {
        success: state.userRegister.success,
        error: state.userRegister.error
    };
}

const mapDispatchToProps = dispatch => {
    return {
        postDocument: (userInfo) => dispatch(actions.postUsers(userInfo))
    }
}


    export default connect(mapStateToProps,mapDispatchToProps)(Register);