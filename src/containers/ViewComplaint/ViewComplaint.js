import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Amplify, { API, Auth } from 'aws-amplify';

class ViewComplaint extends Component {
    render () {
       
        return <div><h1>ViewComplaint</h1></div>;
    } 
};


const mapStateToProps = state => {
    return {
        complaints: state.complaint.complaint,
        success: state.complaint.success,
        error: state.complaint.error
    };
}

const mapDispatchToProps = dispatch => {
    return {
        postComplaint: (user) => dispatch(actions.postComplaint(user))
    }
}


    export default connect(mapStateToProps,mapDispatchToProps)(ViewComplaint);