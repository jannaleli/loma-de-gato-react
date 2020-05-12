import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Amplify, { API, Auth } from 'aws-amplify';
import  classes  from './ApplyClearance.css';
import TextField from '@material-ui/core/TextField';
class ApplyClearance extends Component {



    render () {

        return <div className={classes.ApplyClearance}>
                <h1>ApplyClearance</h1>
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
        postDocument: (clearanceInfo) => dispatch(actions.postDocument(clearanceInfo))
    }
}


    export default connect(mapStateToProps,mapDispatchToProps)(ApplyClearance);