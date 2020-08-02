import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Amplify, { API, Auth } from 'aws-amplify';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import classes from './Login.css';
import Grid from "@material-ui/core/Grid";
class Login extends Component {
    state = {
        email: null,
        password: null,
        email_error: false,
        password_error: false
    }
    onChangeTextField = (value, type) => {

        const val =  value.target.value


        switch(type){
            case 'Email': return this.setState({
                email : val
            }); 
            case 'Password': return this.setState({
                password : val
            }); ;
       

            default: return null
        }
     
    }
    clickSubmit = () => {
    
        this.props.signinUser(this.state.email, this.state.password)
  
    }
    render () {
       
        return        <div className={classes.Login}>     <form noValidate autoComplete="off">

<Grid container justify="center" spacing={0.5}>
       <TextField error={this.state.email_error} id="email" label="Email" onChange={(value) =>this.onChangeTextField(value, 'Email')}/>
       </Grid>
       <Grid container justify="center" spacing={0.5}>
       <TextField error={this.state.password_error} id="password" label="Password" onChange={(value) =>this.onChangeTextField(value, 'Password')} />
       </Grid>
       <br></br>
       <Grid container justify="center" spacing={0.2}>
       <Button variant="contained" color="primary" onClick={this.clickSubmit}>
                Submit
            </Button>
            </Grid>
   </form>
 
         </div>;
    } 
};


const mapStateToProps = state => {
    return {
        success: state.userlogin.userloginsuccess,
        error: state.userlogin.userloginerror
    };
}

const mapDispatchToProps = dispatch => {
    return{
        signinUser: (username,password) => dispatch(actions.signIn(username,password))
    }
}


    export default connect(mapStateToProps,mapDispatchToProps)(Login);