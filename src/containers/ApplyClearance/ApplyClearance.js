import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Amplify, { API, Auth } from 'aws-amplify';
import  classes  from './ApplyClearance.css';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
class ApplyClearance extends Component {
    state = {
        reason: null,
        governmentId: null,
        reason_error: false,
        governmentId_error: false
    }
    onChangeTextField = (value, type) => {

        const val =  value.target.value


        switch(type){
            case 'Reason': return this.setState({
                reason : val
            }); 
            case 'Government ID': return this.setState({
                governmentId : val
            }); 


            default: return null
        }
     
    }


    render () {

        return <div className={classes.ApplyClearance}>
                <h1>ApplyClearance</h1>
                <form noValidate autoComplete="off">
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="reason"
                    value={10}
                    onChange={(value) =>this.onChangeTextField(value, 'Government Id ')}

                 >

                        <MenuItem value={10}>Employment</MenuItem>
                        <MenuItem value={20}>Business</MenuItem>
                
                 </Select>
                 <TextField error={this.state.governmentId_error} id="government_id" label="Government Id"  onChange={(value) =>this.onChangeTextField(value, 'Type')} />

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
        postDocument: (clearanceInfo) => dispatch(actions.postDocument(clearanceInfo))
    }
}


    export default connect(mapStateToProps,mapDispatchToProps)(ApplyClearance);
