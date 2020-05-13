import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Amplify, { API, Auth } from 'aws-amplify';
import  classes  from './ApplyPermit.css';
import TextField from '@material-ui/core/TextField';
class ApplyPermit extends Component {
    state = {
        sec_number: null,
        business_name: null,
        business_activity: null,
        no_of_units: null,
        street: null,
        building_number:null,
        capitalization: null,
        gross_sale: null,
        lessor_name: null,
        lessor_email: null,
        lessor_building_number: null,
        lessor_city: null,
        lessor_subdivision: null,
        lessor_street: null,
        lessor_barangay: null,
        lessor_province: null,
        monthly_rental: null,
        error: false
    }
    render () {
       
        return <div className={classes.ApplyPermit}>
            <h1>ApplyPermit</h1>
            <form noValidate autoComplete="off">
           <TextField id="standard-basic" label="SEC Number" />
           {/* <TextField id="standard-basic" label="Business Name" />
           <TextField id="standard-basic" label="Business Activity" />
           <TextField id="standard-basic" label="No. of Units" />
           <TextField id="standard-basic" label="Street" />
           <TextField id="standard-basic" label="Building Number" />
           <TextField id="standard-basic" label="Capitalization" />
           <TextField id="standard-basic" label="Gross Sale" />
           <TextField id="standard-basic" label="Lessor Name" />
           <TextField id="standard-basic" label="Lessor Email" />
           <TextField id="standard-basic" label="Lessor Building Number" />
           <TextField id="standard-basic" label="Lessor City" />
           <TextField id="standard-basic" label="Lessor Subdivision" />
           <TextField id="standard-basic" label="Lessor Street" />
           <TextField id="standard-basic" label="Lessor Barangay" />
           <TextField id="standard-basic" label="Monthly Rental" /> */}
       </form>
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

export default connect(mapStateToProps,mapDispatchToProps)(ApplyPermit);