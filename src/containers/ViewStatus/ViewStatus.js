import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Amplify, { API, Auth } from 'aws-amplify';

class ViewStatus extends Component {
    render () {
       
        return <div><h1>ViewStatus</h1></div>;
    }
};


const mapStateToProps = state => {
    return {
        permitError: state.userPermitsReducer.error,
        permitSuccess: state.userPermitsReducer.success,
        documentError: state.userdocument.error,
        documentSuccess: state.userdocument.success

    };
}

const mapDispatchToProps = dispatch => {
    return {
        getPermit: () => dispatch(actions.getPermit(username)),
        getDocument: () => dispatch(actions.getDocuments(username))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ViewStatus);