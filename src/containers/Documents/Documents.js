import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Amplify, { API, Auth } from 'aws-amplify';
import Button from '@material-ui/core/Button';
import classes from './Documents.css';
import ApplyClearance from '../ApplyClearance/ApplyClearance';
import ApplyPermit from '../ApplyPermit/ApplyPermit';
import CheckStatus from '../CheckStatus/CheckStatus';
import Modal from '../../components/UI/Modal/Modal';
import Grid from "@material-ui/core/Grid";
class Documents extends Component {

    state = {
        applyClearanceOpen: false,
        applyPermitOpen: false,
        checkStatusOpen: false
    }

    clickApplyClearance = () => {
        console.log('Modal closed ');
        this.setState({
            applyClearanceOpen : true
        });
    }

    clickApplyPermit = () => {
        console.log('clickApplyPermit')
        this.setState({
            applyPermitOpen : true
        }); 
    }

    clickCheckStatus = () => {
        console.log('clickCheckStatus')
        this.setState({
            checkStatusOpen : true
        }); 
    }

    clickApplyClearanceClose = () => {
        this.setState({
            applyClearanceOpen : false
        }); 
    }

    clickApplyPermitClose = () => {
        this.setState({
            applyPermitOpen : false
        }); 
    }

    clickCheckStatusClose = () => {
        this.setState({
            checkStatusOpen : false
        }); 
    }
    render () {
       
        return <React.Fragment>
            <Modal show={this.state.applyClearanceOpen} modalClosed={this.clickApplyClearanceClose}>
  
            <ApplyClearance />
            </Modal>
            <Modal show={this.state.applyPermitOpen} modalClosed={this.clickApplyPermitClose}>

            <ApplyPermit />
            </Modal>
            <Modal show={this.state.checkStatusOpen} modalClosed={this.clickCheckStatusClose}>
                    
            <CheckStatus />
            </Modal>
             <div className={classes.Documents}>
             <Grid container justify="center" spacing={1}>
        <Button variant="contained" onClick={this.clickApplyClearance} color="primary">
             Apply Clearance
        </Button></Grid><br />
        <Grid container justify="center" spacing={1}>
        <Button variant="contained" onClick={this.clickApplyPermit}  color="primary">
             Apply Permit
        </Button></Grid><br />
        <Grid container justify="center" spacing={1}>
        <Button variant="contained" onClick={this.clickCheckStatus}  color="primary">
             Check Status
        </Button></Grid>

        </div>
        </React.Fragment>;
    } 
};


const mapStateToProps = state => {
    return {
        permit: state.permits.permit,
        error: state.permits.error
    };
}



export default connect(mapStateToProps)(Documents);