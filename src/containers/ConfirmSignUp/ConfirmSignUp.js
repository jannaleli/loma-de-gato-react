import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Amplify, { API, Auth } from 'aws-amplify';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import classes from './Login.css';
class Login extends Component {
    state = {
        confirmCode: null,
        confirmCode_error: false
    }
    onChangeTextField = (value, type) => {

        const val =  value.target.value


        switch(type){
            case 'Confirm Code': return this.setState({
                confirmCode_error : val
            }); 

       

            default: return null
        }
     
    }
    clickSubmit = () => {
        console.log('clickApplyPermit')
        console.log(this.state.reason)
        console.log(this.state.governmentId)
  
    }
    render () {
       
        return        <div className={classes.Login}>     <form noValidate autoComplete="off">

           
       <TextField error={this.state.email_error} id="email" label="Email" onChange={(value) =>this.onChangeTextField(value, 'Email')}/>

       <Button variant="contained" color="primary" onClick={this.clickSubmit}>
                Submit
            </Button>
   </form>
 
         </div>;
    } 
};


const mapStateToProps = state => {
    return {
        permit: state.userlogin.permit,
        error: state.userlogin.error
    };
}

const mapDispatchToProps = dispatch => {
    return {
        confirmCode: () => dispatch(actions.getUser())
    }
}


    export default connect(mapStateToProps,mapDispatchToProps)(Login);