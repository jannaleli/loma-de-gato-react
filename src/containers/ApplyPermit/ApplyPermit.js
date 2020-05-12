import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Amplify, { API, Auth } from 'aws-amplify';
import  classes  from './ApplyPermit.css';
import TextField from '@material-ui/core/TextField';
class ApplyPermit extends Component {
    render () {
       
        return <div className={classes.ApplyPermit}>
            <h1>ApplyPermit</h1>
            <form noValidate autoComplete="off">
           <TextField id="standard-basic" label="Standard" />
           
       </form>
            </div>;
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

export default connect(mapStateToProps,mapDispatchToProps)(ApplyPermit);