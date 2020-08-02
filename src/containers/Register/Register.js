import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Amplify, { API, Auth } from 'aws-amplify';
import classes from './Register.css';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import ConfirmSignUp from '../ConfirmSignUp/ConfirmSignUp';
import Modal from '../../components/UI/Modal/Modal';
import Grid from "@material-ui/core/Grid";
class Register extends Component {
    state = {
        confirmSignUp: false,
        submit: false,
        userInfo : {
            email: null,
            password: null,
            firstName: null,
            lastName: null,
            phone: null,
            birthDate:null,
            birthPlace: null,
            gender: null,
            civilStatus: null,
            address: null,
            zipNumber: null,
            grossIncome: null,
            tinNumber: null,
            profession: null,
            weight:null,
            height:null,
            email_error: null,
            password_error: null,
            firstName_error: null,
            lastName_error: null,
            phone_error: null,
            birthDate_error:null,
            birthPlace_error: null,
            gender_error: null,
            civilStatus_error: null,
            address_error: null,
            zipNumber_error: null,
            grossIncome_error: null,
            tinNumber_error: null,
            profession_error: null,
            weight_error:null,
            height_error:null,      
            error: false
        }
 
    }

    onChangeTextField = (value, type) => {

        const val =  value.target.value
        const oldUserInfo = {...this.state.userInfo}

        switch(type){
            case 'Email': 
           
            oldUserInfo.email = val
            return this.setState({
                userInfo:  oldUserInfo
            }); 
            case 'Password':
            oldUserInfo.password = val
            return this.setState({
                userInfo:  oldUserInfo
            }); 
            case 'First Name': 
           
            oldUserInfo.firstName = val
            return this.setState({
                userInfo: oldUserInfo
            }); 
            case 'Last Name': 
           
            oldUserInfo.lastName = val
            return this.setState({
                userInfo:  oldUserInfo
            }); 
            case 'Phone': 
            
            oldUserInfo.phone = val
            return this.setState({
                userInfo:  oldUserInfo
            }); 
            case 'Birth Date': 
            
            oldUserInfo.birthDate = val
            return this.setState({
                userInfo:  oldUserInfo
            }); 
            case 'Birth Place': 
            
            oldUserInfo.birthPlace = val
            return this.setState({
                userInfo:  oldUserInfo
            }); 
            case 'Gender': 
            
            oldUserInfo.gender = val
            return this.setState({
                userInfo:  oldUserInfo
            }); 
            case 'Civil Status': 
           
            oldUserInfo.civilStatus = val
            return this.setState({
                userInfo:  oldUserInfo
            }); 
            case 'Address': 
            
            oldUserInfo.address = val
            return this.setState({
                userInfo:  oldUserInfo
            }); 
            case 'Zip Number': 
           
            oldUserInfo.zipNumber = val
            return this.setState({
                userInfo:  oldUserInfo
            }); 
            case 'Gross Income': 
      
            oldUserInfo.grossIncome = val
            return this.setState({
                userInfo:  oldUserInfo
            }); 
            case 'TIN': 
      
            oldUserInfo.tinNumber = val
            return this.setState({
                userInfo:  oldUserInfo
            }); 
            case 'Profession': 
    
            oldUserInfo.profession = val
            return this.setState({
                userInfo:  oldUserInfo
            }); 
            case 'Weight': 
     
            oldUserInfo.weight = val
            return this.setState({
                userInfo:  oldUserInfo
            }); 
            case 'Height': 
         
            oldUserInfo.height = val
            return this.setState({
                userInfo:  oldUserInfo
            }); 
            default: return null
        }
     
    }
    submitUser = () => {
       // this.props.registerUser(this.state.userInfo)
    }
    clickSubmit = () => {
        console.log('clickApplyPermit')
        console.log(this.state.userInfo.email)
        console.log(this.state.userInfo.password)
        //this.props.registerUser(this.state.userInfo)
       this.props.signUpAWS(this.state.userInfo.email, this.state.userInfo.password)
      this.setState({
        submit:  true
    }); 

        
    }

    confirmSignUpClose = () => {
        this.setState({
            confirmSignUp:  false
        }); 
    }


    render () {

        if(this.state.submit) {
            this.submitUser(this.state.userInfo.email, this.state.userInfo.password)
        }

        console.log('Register')
      
        console.log(this.props.confirmSignUp)
        console.log(this.props.confirmSignUpSuccess )
        return  <div className={classes.Register}>
                <h1>Register</h1>

                <Modal show={this.props.confirmSignUp} modalClosed={this.confirmSignUpClose}>
         
                         <ConfirmSignUp userInfo={this.state.userInfo} modalClosed={this.confirmSignUpClose} />
                </Modal>
              
                {/* <Modal show={this.props.saveDataSuccess} modalClosed={this.clickCheckStatusClose}>
         
                  {//Put success message here 
                  }
                 </Modal>
           */}
           
            <form noValidate autoComplete="off">
       

            <Grid container justify="center" spacing={1}>    
           <TextField error={this.state.email_error} id="email" label="Email" onChange={(value) =>this.onChangeTextField(value, 'Email')}/>
           </Grid>
           <Grid container justify="center" spacing={1}>
           <TextField error={this.state.password_error} id="password" label="Password" onChange={(value) =>this.onChangeTextField(value, 'Password')} />
           </Grid>
           <Grid container justify="center" spacing={1}>
           <TextField error={this.state.firstName_error} id="firstName" label="First Name" onChange={(value) =>this.onChangeTextField(value, 'First Name')} />
           </Grid>
           <Grid container justify="center" spacing={1}>
           <TextField error={this.state.lastName_error} id="lastName" label="Last Name"  onChange={(value) =>this.onChangeTextField(value, 'Last Name')} />
           </Grid>
           <Grid container justify="center" spacing={1}>
           <TextField error={this.state.phone_error} id="phone" label="Phone" onChange={(value) =>this.onChangeTextField(value, 'Phone')}  />
           </Grid>
           <Grid container justify="center" spacing={1}>
           <TextField error={this.state.birthDate_error} id="birthDate" label="Birth Date" onChange={(value) =>this.onChangeTextField(value, 'Birth Date')}  />
           </Grid>
           
           <Grid container justify="center" spacing={1}>
           <TextField error={this.state.birthPlace_error} id="birthPlace" label="Birth Place" onChange={(value) =>this.onChangeTextField(value, 'Birth Place')} />
           </Grid>
           <Grid container justify="center" spacing={1}>
           <TextField error={this.state.gender_error} id="gender" label="Gender" onChange={(value) =>this.onChangeTextField(value, 'Gender')} />
           </Grid>
           <Grid container justify="center" spacing={1}>
           <TextField error={this.state.civilStatus_error} id="civilService" label="Civil Status" onChange={(value) =>this.onChangeTextField(value, 'Civil Status')} />
           </Grid>
           <Grid container justify="center" spacing={1}>
           <TextField error={this.state.address_error} id="address" label="Address" onChange={(value) =>this.onChangeTextField(value, 'Address')} />
           </Grid>
           <Grid container justify="center" spacing={1}>
           <TextField error={this.state.zipNumber_error} id="zipNumber" label="Zip Number" onChange={(value) =>this.onChangeTextField(value, 'Zip Number')}  />
           </Grid>
           <Grid container justify="center" spacing={1}>
           <TextField error={this.state.grossIncome_error} id="grossIncome" label="Gross Income" onChange={(value) =>this.onChangeTextField(value, 'Gross Income')} />
           </Grid>
           <Grid container justify="center" spacing={1}>
           <TextField error={this.state.tinNumber_error} id="tinNumber" label="TIN"  onChange={(value) =>this.onChangeTextField(value, 'TIN')} />
           </Grid>
           <Grid container justify="center" spacing={1}>
           <TextField error={this.state.profession_error} id="profession" label="Profession" onChange={(value) =>this.onChangeTextField(value, 'Profession')} />
           </Grid>
           <Grid container justify="center" spacing={3}>
           <TextField error={this.state.weight_error} id="weight" label="Weight" onChange={(value) =>this.onChangeTextField(value, 'Weight')} />
           </Grid>
           <Grid container justify="center" spacing={3}>
           <TextField error={this.state.height_error} id="height" label="Height" onChange={(value) =>this.onChangeTextField(value, 'Height')} />
           </Grid>
       </form>
       <br></br>
       <Grid container justify="center" spacing={3}>
       <Button variant="contained" color="primary" onClick={this.clickSubmit}>
                    Submit
                </Button>
                </Grid>
             </div>;
    } 
};


const mapStateToProps = state => {
    return {
        success: state.userregister.success,
        error: state.userregister.error,
        saveDataSuccess: state.userregister.saveDataSuccess,
        saveDataError: state.userregister.saveDataError,
        errorSignUp: state.userregister.errorSignUp,
        successSignUp: state.userregister.successSignUp,
        confirmSignUp: state.userregister.confirmSignUp,
        confirmSignUpSuccess: state.userregister.confirmSignUpSuccess,
        confirmSignUpError: state.userregister.confirmSignUpError
        
    };
}

const mapDispatchToProps = dispatch => {
    return {
        registerUser: (userInfo) => dispatch(actions.callRegisterUser(userInfo)),
        signUpAWS: (email, password) => dispatch(actions.signUp(email, password))
        
    }
}


    export default connect(mapStateToProps,mapDispatchToProps)(Register);