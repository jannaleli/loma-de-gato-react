import React, {Component} from 'react';
import {connect} from 'react-redux';
import MainContainer from '../MainContainer/MainContainer';
import ApplyClearance from '../ApplyClearance/ApplyClearance';
import ApplyPermit from '../ApplyPermit/ApplyPermit';
import Register from '../Register/Register';
import Login from '../Login/Login';
import CheckStatus from '../CheckStatus/CheckStatus';
import Events from '../Events/Events';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';

class ApplicationContainer extends Component {
    clickApplyClearance = () => {


        this.props.history.push('/apply-clearance');
    
      
     
    }
    
    clickApplyPermit = () => {
      this.props.history.push('/apply-permit');
    }
    
    clickCheckStatus = () => {
      this.props.history.push('/check-status');
    }
    
   render () {
       return <React.Fragment>
           <Events />
       <MainContainer title='Apply Clearance' subtitle='Apply Clearance' url='https://barangay-api.s3-ap-southeast-1.amazonaws.com/apply_clearance.jpg' clicked={this.clickApplyClearance} />
       <MainContainer title='Apply Permit' subtitle='Apply Permit' url='https://barangay-api.s3-ap-southeast-1.amazonaws.com/apply_permit.jpg' clicked={this.clickApplyPermit} />
       <MainContainer title='Check Status' subtitle='Check status' url='https://barangay-api.s3-ap-southeast-1.amazonaws.com/check_status.jpg' clicked={this.clickCheckStatus} />
       
   

       </React.Fragment>
   }
}

export default withRouter(ApplicationContainer);