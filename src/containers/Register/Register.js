import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Amplify, { API, Auth } from 'aws-amplify';
import classes from './Register.css';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';



class Register extends Component {
    state = {
        email: null,
        password: null,
        firstName: null,
        lastName: null,
        phone: null,
        birthDate:null,
        birthPlace: null,
        gender: null,
        civilService: null,
        address: null,
        zipNumber: null,
        grossIncome: null,
        tinNumber: null,
        profession: null,
        weight:null,
        height:null,
        error: false
    }


    render () {
       
        return  <div className={classes.Register}>
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
        success: state.userRegister.success,
        error: state.userRegister.error
    };
}

const mapDispatchToProps = dispatch => {
    return {
        postDocument: (userInfo) => dispatch(actions.postUsers(userInfo))
    }
}


    export default connect(mapStateToProps,mapDispatchToProps)(Register);