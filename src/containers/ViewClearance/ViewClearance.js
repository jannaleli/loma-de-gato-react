import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Amplify, { API, Auth } from 'aws-amplify';

class ViewClearance extends Component {
    render () {
       
        return <div><h1>ViewClearance</h1></div>;
    } 
};


const mapStateToProps = state => {
    return {
        permit: state.document.permit,
        error: state.document.error
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getClearance: () => dispatch(actions.getClearance())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewClearance);