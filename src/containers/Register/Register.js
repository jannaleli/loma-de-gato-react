import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Amplify, { API, Auth } from 'aws-amplify';
import classes from './Register.css';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';



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

    onChangeTextField = (value, type) => {

        const val =  value.target.value


        switch(type){
            case 'Email': return this.setState({
                email : val
            }); 
            case 'Password': return this.setState({
                password : val
            }); ;
            case 'First Name': return this.setState({
                firstName : val
            }); ;
            case 'Last Name': return this.setState({
                lastName : val
            }); ;
            case 'Phone': return this.setState({
                phone : val
            }); ;
            case 'Birth Date': return this.setState({
                birthDate : val
            }); 
            case 'Birth Place': return this.setState({
                birthPlace : val
            }); 
            case 'Gender': return this.setState({
                gender : val
            }); 
            case 'Civil Status': return this.setState({
                civilService : val
            }); 
            case 'Address': return this.setState({
                address : val
            }); 
            case 'Zip Number': return this.setState({
                zipNumber : val
            }); 
            case 'Gross Income': return this.setState({
                grossIncome : val
            }); 
            case 'TIN': return this.setState({
                tinNumber : val
            }); 
            case 'Profession': return this.setState({
                profession : val
            }); 
            case 'Weight': return this.setState({
                weight : val
            }); 
            case 'Height': return this.setState({
                height : val
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