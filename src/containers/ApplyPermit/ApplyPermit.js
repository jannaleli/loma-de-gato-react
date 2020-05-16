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
        sec_number_error: false,
        business_name_error: false,
        business_activity_error: false,
        no_of_units_error: false,
        street_error: false,
        building_number_error:false,
        capitalization_error: false,
        gross_sale_error: false,
        lessor_name_error: false,
        lessor_email_error: false,
        lessor_building_number_error: false,
        lessor_city_error: false,
        lessor_subdivision_error: false,
        lessor_street_error: false,
        lessor_barangay_error: false,
        lessor_province_error: false,
        monthly_rental_error: false,
    }

    onChangeTextField = (value, type) => {

        const val =  value.target.value
        console.log(value.target)
        console.log(value.target.value)
        console.log(value.target.type)

        switch(type){
            case 'SEC Number': return this.setState({
                sec_number : val
            }); 
            case 'Business Name': return this.setState({
                business_name : val
            }); ;
            case 'Business Activity': return this.setState({
                business_activity : val
            }); ;
            case 'Street': return this.setState({
                street : val
            }); ;
            case 'Building Number': return this.setState({
                building_number : val
            }); ;
            case 'Capitalization': return this.setState({
                capitalization : val
            }); 
            case 'Gross Sale': return this.setState({
                gross_sale : val
            }); 
            case 'Lessor Name': return this.setState({
                lessor_name : val
            }); 
            case 'Lessor Email': return this.setState({
                lessor_email : val
            }); 
            case 'Lessor Building Number': return this.setState({
                lessor_building_number : val
            }); 
            case 'Lessor City': return this.setState({
                lessor_city : val
            }); 
            case 'Lessor Subdivision': return this.setState({
                lessor_subdivision : val
            }); 
            case 'Lessor Street': return this.setState({
                lessor_street : val
            }); 
            case 'Lessor Barangay': return this.setState({
                lessor_barangay : val
            }); 
            case 'Monthly Rental': return this.setState({
                monthly_rental : val
            }); 


            default: return null
        }
     
    }
    render () {
       
        return <div className={classes.ApplyPermit}>
            <h1>ApplyPermit</h1>
            <form noValidate autoComplete="off">
           <TextField error={this.state.sec_number_error} id="sec_number" label="SEC Number" onChange={(value) =>this.onChangeTextField(value, 'SEC Number')}/>
           <TextField error={this.state.business_name_error} id="business_name" label="Business Name" onChange={(value) =>this.onChangeTextField(value, 'Business Name')} />
           <TextField error={this.state.business_activity_error} id="business_activity" label="Business Activity" onChange={(value) =>this.onChangeTextField(value, 'Business Activity')} />
           <TextField error={this.state.no_of_units_error} id="no_of_units" label="No. of Units"  onChange={(value) =>this.onChangeTextField(value, 'No. of Units')} />
           <TextField error={this.state.street_error} id="street" label="Street" onChange={(value) =>this.onChangeTextField(value, 'Street')}  />
           <TextField error={this.state.building_number_error} id="building_number" label="Building Number" onChange={(value) =>this.onChangeTextField(value, 'Building Number')}  />
           <TextField error={this.state.capitalization_error} id="capitalization" label="Capitalization" onChange={(value) =>this.onChangeTextField(value, 'Capitalization')} />
           <TextField error={this.state.gross_sale_error} id="gross_sale" label="Gross Sale" onChange={(value) =>this.onChangeTextField(value, 'Gross Sale')} />
           <TextField error={this.state.lessor_name_error} id="lessor_name" label="Lessor Name" onChange={(value) =>this.onChangeTextField(value, 'Lessor Name')} />
           <TextField error={this.state.lessor_email_error} id="lessor_email" label="Lessor Email" onChange={(value) =>this.onChangeTextField(value, 'Lessor Email')} />
           <TextField error={this.state.lessor_building_number_error} id="lessor_building_number" label="Lessor Building Number" onChange={(value) =>this.onChangeTextField(value, 'Lessor Building Number')}  />
           <TextField error={this.state.lessor_city_error} id="lessor_city" label="Lessor City" onChange={(value) =>this.onChangeTextField(value, 'Lessor City')} />
           <TextField error={this.state.lessor_subdivision_error} id="lessor_subdivision" label="Lessor Subdivision"  onChange={(value) =>this.onChangeTextField(value, 'Lessor Subdivision')} />
           <TextField error={this.state.lessor_street_error} id="lessor_street" label="Lessor Street" onChange={(value) =>this.onChangeTextField(value, 'Lessor Street')} />
           <TextField error={this.state.lessor_barangay_error} id="lessor_barangay" label="Lessor Barangay" onChange={(value) =>this.onChangeTextField(value, 'Lessor Barangay')} />
           <TextField error={this.state.lessor_province_error} id="lessor_province_error" label="Lessor Province" onChange={(value) =>this.onChangeTextField(value, 'Lessor Province')} />
           <TextField error={this.state.monthly_rental_error} id="lessor_monthly_rental" label="Monthly Rental" onChange={(value) =>this.onChangeTextField(value, 'Monthly Rental')} />
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