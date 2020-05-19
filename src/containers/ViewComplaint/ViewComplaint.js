import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Amplify, { API, Auth } from 'aws-amplify';
import GoogleMapReact from 'google-map-react';
import GoogleMaps from '../../components/Maps/GoogleMaps';
import Button from '@material-ui/core/Button';
import Modal from '../../components/UI/Modal/Modal';
import PostComplaint from '../PostComplaint/PostComplaint';
class ViewComplaint extends Component {
    state = {
        postComplaintOpen: false
    }
    clickSubmit = () => {
        this.setState({
            postComplaintOpen : true
        }); 
    }
    clickClose = () => {
        this.setState({
            postComplaintOpen : false
        }); 
    }

    render () {
       
        return <div><h1>ViewComplaint</h1>
    <GoogleMaps />
    <Button variant="contained" color="primary" onClick={this.clickSubmit}>
                    Post Complaint
        </Button>
        <Modal show={this.state.postComplaintOpen} modalClosed={this.clickClose}>
         
  <PostComplaint />
</Modal>
    </div>;
    } 
};


const mapStateToProps = state => {
    return {
        complaints: state.complaint.complaint,
        success: state.complaint.success,
        error: state.complaint.error
    };
}

const mapDispatchToProps = dispatch => {
    return {
        postComplaint: (user) => dispatch(actions.postComplaint(user))
    }
}

    export default connect(mapStateToProps,mapDispatchToProps)(ViewComplaint);