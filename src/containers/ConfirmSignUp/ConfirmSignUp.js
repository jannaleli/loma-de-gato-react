import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Amplify, { API, Auth } from 'aws-amplify';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import classes from './ConfirmSignUp.css';
class Login extends Component {
    state = {
        confirmCode: null,
        confirmCode_error: false
    }
    onChangeTextField = (value, type) => {

        const val =  value.target.value


        switch(type){
            case 'Confirm Code': return this.setState({
                confirmCode : val
            }); 

       

            default: return null
        }
     
    }
    clickSubmit = () => {
        console.log('clickApplyPermit')
        console.log(this.state.reason)
        console.log(this.state.governmentId)
        this.props.confirmCode(this.props.userInfo,this.state.confirmCode )
  
    }
    render () {
       
        return        <div className={classes.ConfirmSignUp}>     <form noValidate autoComplete="off">

           
       <TextField error={this.state.confirmCode_error} id="confirm_code" label="Confirm Code" onChange={(value) =>this.onChangeTextField(value, 'Confirm Code')}/>

       <Button variant="contained" color="primary" onClick={this.clickSubmit}>
                Submit
            </Button>
   </form>
 
         </div>;
    } 
};


// const mapStateToProps = state => {
//     return {
   
//         error: state.userlogin.error
//     };
// }

const mapDispatchToProps = dispatch => {
    return {
        confirmCode: (userInfo, code) => dispatch(actions.confirmTheSignUp(userInfo,code))
    }
}


    export default connect(null,mapDispatchToProps)(Login);