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

class Documents extends Component {

    state = {
        applyClearanceOpen: false,
        applyClearanceClose: true,
        applyPermitOpen: false,
        applyPermitClose: true,
        checkStatusOpen: false,
        checkStatusClose: true
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
    render () {
       
        return <div className={classes.Documents}>
         <Modal show={this.state.applyClearanceOpen} modalClosed={this.ModalClosed}>
  
              <ApplyClearance />
        </Modal>
        <Modal show={this.state.applyPermitOpen} modalClosed={this.ModalClosed}>

              <ApplyPermit />
        </Modal>
        <Modal show={this.state.checkStatusOpen} modalClosed={this.ModalClosed}>
                     
              <CheckStatus />
        </Modal>
        <Button variant="contained" onClick={this.clickApplyClearance} color="primary">
             Apply Clearance
        </Button><br />
        <Button variant="contained" onClick={this.clickApplyPermit}  color="primary">
             Apply Permit
        </Button><br />
        <Button variant="contained" onClick={this.clickCheckStatus}  color="primary">
             Check Status
        </Button>

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
        getPermit: () => dispatch(actions.getPermit())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Documents);