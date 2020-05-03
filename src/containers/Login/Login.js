import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Amplify, { API, Auth } from 'aws-amplify';

class Login extends Component {
    render () {
       
        return <div><h1>Login</h1></div>;
    } 
};


const mapStateToProps = state => {
    return {
        permit: state.userlogin.permit,
        error: state.userlogin.error
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getUser: () => dispatch(actions.getUser())
    }
}


    export default connect(mapStateToProps,mapDispatchToProps)(Login);