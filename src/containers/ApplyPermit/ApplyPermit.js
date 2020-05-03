import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Amplify, { API, Auth } from 'aws-amplify';

class ApplyPermit extends Component {
    render () {
       
        return <div><h1>ApplyPermit</h1></div>;
    } 
};


const mapStateToProps = state => {
    return {
        permit: state.permit.permit,
        error: state.permit.error
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getPermit: () => dispatch(actions.getPermit())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ApplyPermit);