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

class Register extends Component {
    state = {
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
            civilService: null,
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
            civilService_error: null,
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
           
            oldUserInfo.civilService = val
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
        this.props.registerUser(this.state.userInfo)
    }
    clickSubmit = () => {
        console.log('clickApplyPermit')
        console.log(this.state.reason)
        console.log(this.state.governmentId)
        //this.props.registerUser(this.state.userInfo)
      //  this.props.signUpAWS(this.state.userInfo.email, this.state.userInfo.password)
      this.setState({
        submit:  true
    }); 

        
    }
    render () {

        if(this.state.submit) {
            this.submitUser(this.state.userInfo.email, this.state.userInfo.password)
        }


        if(this.props.saveDataSuccess) {
            //Build success message here :) And then close all the modals or reload the page maybe?
        }
       
        return  <div className={classes.Register}>
                <h1>ApplyClearance</h1>

                <Modal show={  this.props.confirmSignUp} modalClosed={this.clickCheckStatusClose}>
         
                <ConfirmSignUp />
                </Modal>
              
                <Modal show={  this.props.saveDataSuccess} modalClosed={this.clickCheckStatusClose}>
         
                  {//Put success message here 
                  }
                 </Modal>
          
           
            <form noValidate autoComplete="off">
       

               
           <TextField error={this.state.email_error} id="email" label="Email" onChange={(value) =>this.onChangeTextField(value, 'Email')}/>
           <TextField error={this.state.password_error} id="password" label="Password" onChange={(value) =>this.onChangeTextField(value, 'Password')} />
           <TextField error={this.state.firstName_error} id="firstName" label="First Name" onChange={(value) =>this.onChangeTextField(value, 'First Name')} />
           <TextField error={this.state.lastName_error} id="lastName" label="Last Name"  onChange={(value) =>this.onChangeTextField(value, 'Last Name')} />
           <TextField error={this.state.phone_error} id="phone" label="Phone" onChange={(value) =>this.onChangeTextField(value, 'Phone')}  />
           <TextField error={this.state.birthDate_error} id="birthDate" label="Birth Date" onChange={(value) =>this.onChangeTextField(value, 'Birth Date')}  />
           <TextField error={this.state.birthPlace_error} id="birthPlace" label="Birth Place" onChange={(value) =>this.onChangeTextField(value, 'Birth Place')} />
           <TextField error={this.state.gender_error} id="gender" label="Gender" onChange={(value) =>this.onChangeTextField(value, 'Gender')} />
           <TextField error={this.state.civilService_error} id="civilService" label="Civil Status" onChange={(value) =>this.onChangeTextField(value, 'Civil Status')} />
           <TextField error={this.state.address_error} id="address" label="Address" onChange={(value) =>this.onChangeTextField(value, 'Address')} />
           <TextField error={this.state.zipNumber_error} id="zipNumber" label="Zip Number" onChange={(value) =>this.onChangeTextField(value, 'Zip Number')}  />
           <TextField error={this.state.grossIncome_error} id="grossIncome" label="Gross Income" onChange={(value) =>this.onChangeTextField(value, 'Gross Income')} />
           <TextField error={this.state.tinNumber_error} id="tinNumber" label="TIN"  onChange={(value) =>this.onChangeTextField(value, 'TIN')} />
           <TextField error={this.state.profession_error} id="profession" label="Profession" onChange={(value) =>this.onChangeTextField(value, 'Profession')} />
           <TextField error={this.state.weight_error} id="weight" label="Weight" onChange={(value) =>this.onChangeTextField(value, 'Weight')} />
           <TextField error={this.state.height_error} id="height" label="Height" onChange={(value) =>this.onChangeTextField(value, 'Height')} />
      
       </form>
       <Button variant="contained" color="primary" onClick={this.clickSubmit}>
                    Submit
                </Button>
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
        signUpAWS: (email, password) => dispatch(actions.signUp(email, password)),
        confirmSignUp: () => dispatch(actions.confirmSignUp())
    }
}


    export default connect(mapStateToProps,mapDispatchToProps)(Register);