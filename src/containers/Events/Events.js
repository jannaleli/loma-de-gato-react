import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Amplify, { API, Auth } from 'aws-amplify';

class Events extends Component {
    render () {
       
        return <div><h1>Events</h1></div>;
    } 
};


const mapStateToProps = state => {
    return {
        events: state.events.events,
        error: state.events.error,
        success: state.events.success
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getEvents: () => dispatch(actions.getEvents())
    }
}

export default connect(mapStateToProps,mapDispatchToProps )(Events);