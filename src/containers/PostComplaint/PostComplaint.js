import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Amplify, { API, Auth } from 'aws-amplify';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
class PostComplaint extends Component {
    state = {
        complaint_id: null,
        attachment_id: null,
        complaint_desc: null,
        latitude: null,
        longitude: null,
        type:null,
        user_id: null,
        status: null,
        create_date: null,
        complaint_id_error: null,
        attachment_id_error: null,
        complaint_desc_error: null,
        latitude_error: null,
        longitude_error: null,
        type_error:null,
        user_id_error: null,
        status_error: null,
        create_date_error: null,
    }

    onChangeTextField = (value, type) => {

        const val =  value.target.value


        switch(type){
            case 'Complaint Description': return this.setState({
                complaint_desc : val
            }); 
            case 'Latitude': return this.setState({
                latitude : val
            }); ;
            case 'Longitude': return this.setState({
                longitude : val
            }); ;
            case 'type': return this.setState({
                type : val
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
       
        return <div><h1>PostComplaint</h1>
        
        <TextField error={this.state.complaint_desc_error} id="complaint_desc" label="Complaint Description" onChange={(value) =>this.onChangeTextField(value, 'Complaint Description')}/>
           <TextField error={this.state.latitude_error} id="latitude" label="Latitude" onChange={(value) =>this.onChangeTextField(value, 'Latitude')} />
           <TextField error={this.state.longitude_error} id="longitude" label="Longitude" onChange={(value) =>this.onChangeTextField(value, 'Longitude')} />
           <TextField error={this.state.type_error} id="type" label="Type"  onChange={(value) =>this.onChangeTextField(value, 'Type')} />
           <Button variant="contained" color="primary" onClick={this.clickSubmit}>
                    Submit
                </Button>
          
          </div>;
    } 
};


const mapStateToProps = state => {
    return {
        success: state.usercomplaint.success,
        error: state.usercomplaint.error
    };
}

const mapDispatchToProps = dispatch => {
    return {
        PostComplaint: (complaint) => dispatch(actions.postComplaint(complaint))
    }
}


    export default connect(mapStateToProps,mapDispatchToProps)(PostComplaint);