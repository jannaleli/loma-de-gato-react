import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Amplify, { API, Auth } from 'aws-amplify';

class Documents extends Component {
    render () {
       
        return <div><h1>Documents</h1></div>;
    } 
};


const mapStateToProps = state => {
    return {
        permit: state.permits.permit,
        error: state.permits.error
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getPermit: () => dispatch(actions.getPermit())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Documents);