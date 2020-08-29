import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Amplify, { API, Auth } from 'aws-amplify';
import  classes  from './ApplyClearance.css';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import { randomString } from '../../shared/utility';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import parentClass from '../ApplicationContainer/ApplicationContainer.css';
class ApplyClearance extends Component {
    state = {
        reason: null,
        governmentId: null,
        reason_error: false,
        governmentId_error: false
    }
    onChangeTextField = (value, type) => {

        const val =  value.target.value
 
        switch(type){
            case 'Reason': return this.setState({
                reason : val
            }); 
            case 'Government ID': return this.setState({
                governmentId : val
            }); 


            default: return null
        }
     
    }
    clickSubmit = () => {
        console.log('clickApplyPermit')
        console.log('reason')
        console.log(this.state.reason)
        console.log('government id')
        console.log(this.state.governmentId)
        const user_id = randomString(16, "123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz")
        console.log(user_id)
        const attachment_id = 'null'
        const username = 'bom@gmail.com'
        const expiration_date = 'null'
        this.props.postDocument(username,user_id,attachment_id,expiration_date,this.state.governmentId,this.state.reason)
  
    }

    render () {

        return <div className={parentClass.ApplicationContainer}>
            {/* <div className={classes.ApplyClearance}> */}
                <h1>ApplyClearance</h1>
                <div className={classes.Scroll}>
                <form noValidate autoComplete="off">
                <Grid container justify="center" spacing={1}>
                 <Select defaultValue="Employment" id="reason"  onChange={(value) =>this.onChangeTextField(value, 'Reason')}>
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={"Employment"}>Employment</MenuItem>
                        <MenuItem value={"Business"}>Business</MenuItem>

                </Select>
                </Grid>

                <Grid container justify="center" spacing={1}>
                 <TextField error={this.state.governmentId_error} id="government_id" label="Government Id"  onChange={(value) =>this.onChangeTextField(value, 'Government ID')} />
                 </Grid>
                 <br></br>
                 <Grid container justify="center" spacing={1}>
                 <Button variant="contained" color="primary" onClick={this.clickSubmit}>
                    Submit
                </Button>
                </Grid>
                </form>
                </div>
             {/* </div> */}
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
        postDocument: (username, user_id, attachment_id, expiration_date, government_id, reason) => dispatch(actions.callPostDocument(username, user_id, attachment_id, expiration_date, government_id, reason))
    }
}


    export default withRouter(connect(mapStateToProps,mapDispatchToProps)(ApplyClearance));
