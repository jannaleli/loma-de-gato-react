import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Amplify, { API, Auth } from 'aws-amplify';

class PostComplaint extends Component {
    render () {
       
        return <div><h1>PostComplaint</h1></div>;
    } 
};


const mapStateToProps = state => {
    return {
        success: state.usercomplaint.success,
        error: state.usercomplaint.error
    };
}

const mapDispatchToProps = dispatch => {
    return {
        PostComplaint: (complaint) => dispatch(actions.postComplaint(complaint))
    }
}


    export default connect(mapStateToProps,mapDispatchToProps)(PostComplaint);