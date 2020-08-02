import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Grid from "@material-ui/core/Grid";
import Amplify, { API, Auth } from 'aws-amplify';
import  classes  from './ApplyPermit.css';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { Icon } from 'semantic-ui-react';
import { randomString } from '../../shared/utility'
const iconStyle = {  
  borderRadius: '100px',  
  boxShadow: '3px 3px 1px #888888',
  width:'100px',
  height:'100px'
} 
class ApplyPermit extends Component {
    state = {

        permitInfo : {
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
     
    }

    onChangeTextField = (value, type) => {

        const val =  value.target.value
        console.log(value.target)
        console.log(value.target.value)
        console.log(value.target.type)
        const oldpermitInfo = {...this.state.permitInfo}
        switch(type){
            case 'SEC Number': 
            
            oldpermitInfo.sec_number = val
            return this.setState({
                permitInfo:  oldpermitInfo
            }); 
            case 'Business Name': 
       
            oldpermitInfo.business_name = val
            return this.setState({
                permitInfo:  oldpermitInfo
            }); 
            case 'Business Activity': 
           
            oldpermitInfo.business_activity = val
            return this.setState({
                permitInfo:  oldpermitInfo
            }); 
            case 'Street': 
          
            oldpermitInfo.street = val
            return this.setState({
                permitInfo:  oldpermitInfo
            }); 
            case 'Building Number': 
 
            oldpermitInfo.building_number = val
            return this.setState({
                permitInfo:  oldpermitInfo
            }); 
            case 'Capitalization':  
     
            oldpermitInfo.capitalization = val
            return this.setState({
                permitInfo:  oldpermitInfo
            }); 
            case 'Gross Sale': 
      
            oldpermitInfo.gross_sale = val
            return this.setState({
                permitInfo:  oldpermitInfo
            }); 
            case 'Lessor Name':
           
            oldpermitInfo.lessor_name = val
            return this.setState({
                permitInfo:  oldpermitInfo
            }); 
            case 'Lessor Email':
      
            oldpermitInfo.lessor_email = val
            return this.setState({
                permitInfo:  oldpermitInfo
            }); 
            case 'Lessor Building Number': 
         
            oldpermitInfo.lessor_building_number = val
            return this.setState({
                permitInfo:  oldpermitInfo
            }); 
            case 'Lessor City': 
  
            oldpermitInfo.lessor_city = val
            return this.setState({
                permitInfo:  oldpermitInfo
            }); 
            case 'Lessor Subdivision':

            oldpermitInfo.lessor_subdivision = val
            return this.setState({
                permitInfo:  oldpermitInfo
            }); 
            case 'Lessor Street': 

            oldpermitInfo.lessor_street = val
            return this.setState({
                permitInfo:  oldpermitInfo
            }); 
            case 'Lessor Barangay': 
    
            oldpermitInfo.lessor_barangay = val
            return this.setState({
                permitInfo:  oldpermitInfo
            }); 
            case 'Monthly Rental': 
    
            oldpermitInfo.monthly_rental = val
            return this.setState({
                permitInfo:  oldpermitInfo
            }); 


            default: return null
        }
     
    }

    submitPermit = () => {
        this.props.postPermit(this.state.permitInfo)
    }
    clickSubmit = () => {
        console.log('clickApplyPermit')


        const oldpermitInfo = {...this.state.permitInfo}
        oldpermitInfo.username =  'bom@gmail.com'
        oldpermitInfo.user_id = randomString(16, "123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz")
        oldpermitInfo.approval_date = 'null'
        oldpermitInfo.status = 'PENDING'
        oldpermitInfo.ctc_no = randomString(16, "123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz")
        this.setState({
            permitInfo:  oldpermitInfo
        }, this.submitPermit); 
        
    }
    render () {
       
        return <div className={classes.ApplyPermit}>
            <h1>Apply Permit</h1>

            <div className={classes.Scroll}>
            <form noValidate autoComplete="off">
            <Grid container justify="center" spacing={1}>
           <TextField error={this.state.sec_number_error} id="sec_number" label="SEC Number" onChange={(value) =>this.onChangeTextField(value, 'SEC Number')}/>
           </Grid>

           <Grid container justify="center" spacing={1}>
           <TextField error={this.state.business_name_error} id="business_name" label="Business Name" onChange={(value) =>this.onChangeTextField(value, 'Business Name')} />
           </Grid>

           <Grid container justify="center" spacing={1}>
           <TextField error={this.state.business_activity_error} id="business_activity" label="Business Activity" onChange={(value) =>this.onChangeTextField(value, 'Business Activity')} />
           </Grid>

           <Grid container justify="center" spacing={1}>
           <TextField error={this.state.no_of_units_error} id="no_of_units" label="No. of Units"  onChange={(value) =>this.onChangeTextField(value, 'No. of Units')} />
           </Grid>

           <Grid container justify="center" spacing={1}>
           <TextField error={this.state.street_error} id="street" label="Street" onChange={(value) =>this.onChangeTextField(value, 'Street')}  />
           </Grid>

           <Grid container justify="center" spacing={1}>
           <TextField error={this.state.building_number_error} id="building_number" label="Building Number" onChange={(value) =>this.onChangeTextField(value, 'Building Number')}  />
           </Grid>

           <Grid container justify="center" spacing={1}>
           <TextField error={this.state.capitalization_error} id="capitalization" label="Capitalization" onChange={(value) =>this.onChangeTextField(value, 'Capitalization')} />
           </Grid>

           <Grid container justify="center" spacing={1}>
           <TextField error={this.state.gross_sale_error} id="gross_sale" label="Gross Sale" onChange={(value) =>this.onChangeTextField(value, 'Gross Sale')} />
           </Grid>

           <Grid container justify="center" spacing={1}>
           <TextField error={this.state.lessor_name_error} id="lessor_name" label="Lessor Name" onChange={(value) =>this.onChangeTextField(value, 'Lessor Name')} />
           </Grid>

           <Grid container justify="center" spacing={1}>
           <TextField error={this.state.lessor_email_error} id="lessor_email" label="Lessor Email" onChange={(value) =>this.onChangeTextField(value, 'Lessor Email')} />
           </Grid>

           <Grid container justify="center" spacing={1}>
           <TextField error={this.state.lessor_building_number_error} id="lessor_building_number" label="Lessor Building Number" onChange={(value) =>this.onChangeTextField(value, 'Lessor Building Number')}  />
           </Grid>

           <Grid container justify="center" spacing={1}>
           <TextField error={this.state.lessor_city_error} id="lessor_city" label="Lessor City" onChange={(value) =>this.onChangeTextField(value, 'Lessor City')} />
           </Grid>

           <Grid container justify="center" spacing={1}>
           <TextField error={this.state.lessor_subdivision_error} id="lessor_subdivision" label="Lessor Subdivision"  onChange={(value) =>this.onChangeTextField(value, 'Lessor Subdivision')} />
           </Grid>

           <Grid container justify="center" spacing={1}>
           <TextField error={this.state.lessor_street_error} id="lessor_street" label="Lessor Street" onChange={(value) =>this.onChangeTextField(value, 'Lessor Street')} />
           </Grid>

           <Grid container justify="center" spacing={1}>
           <TextField error={this.state.lessor_barangay_error} id="lessor_barangay" label="Lessor Barangay" onChange={(value) =>this.onChangeTextField(value, 'Lessor Barangay')} />
           </Grid>

           <Grid container justify="center" spacing={1}>
           <TextField error={this.state.lessor_province_error} id="lessor_province_error" label="Lessor Province" onChange={(value) =>this.onChangeTextField(value, 'Lessor Province')} />
           </Grid>

           <Grid container justify="center" spacing={1}>
           <TextField error={this.state.monthly_rental_error} id="lessor_monthly_rental" label="Monthly Rental" onChange={(value) =>this.onChangeTextField(value, 'Monthly Rental')} />
           </Grid>
            <br></br>
           <Grid container justify="center" spacing={1}>
           <Button variant="contained" color="primary" onClick={this.clickSubmit}>
                    Submit
                </Button>
           </Grid>
       </form>
</div>
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
        postPermit: (permitInfo) => dispatch(actions.callPostPermit(permitInfo))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ApplyPermit);