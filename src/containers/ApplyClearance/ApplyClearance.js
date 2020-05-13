import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Amplify, { API, Auth } from 'aws-amplify';
import  classes  from './ApplyClearance.css';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
class ApplyClearance extends Component {
    state = {
        reason: null,
        governmentId: null,
        error: false
    }
    open = () => {

    }
    handleClose = () => {

    }
    handleOpen= () => {

    }
    handleChange = () => {

    }


    render () {

        return <div className={classes.ApplyClearance}>
                <h1>ApplyClearance</h1>
                <form noValidate autoComplete="off">
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    value={0}

                 >
                        <MenuItem value={0}>
                            <em>Select Reason</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                 </Select>
                 <TextField
                    error={this.state.error}
                    id="standard-error-helper-text"
                    label="Error"
                    defaultValue="Hello World"
                    helperText="Incorrect Entry" />

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
