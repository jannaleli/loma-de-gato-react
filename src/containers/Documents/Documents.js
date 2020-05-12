import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Amplify, { API, Auth } from 'aws-amplify';
import Button from '@material-ui/core/Button';
import classes from './Documents.css';
class Documents extends Component {

    clickApplyClearance = () => {
        console.log('clickApplyClearance')
    }

    clickApplyPermit = () => {
        console.log('clickApplyPermit') 
    }

    clickCheckStatus = () => {
        console.log('clickCheckStatus')
    }
    render () {
       
        return <div className={classes.Documents}>
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