import React, { Component } from 'react';
import classes from './GoogleMaps.css';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Markers from './Markers/Markers'

class GoogleMaps extends Component {


    state = {
      markers: null
    }

    componentDidMount () {
        this.props.getComplaints()
    }

      render () {
        const mapStyles = {
            width: '100%',
            height: '100vh'
          };
          return         <div className={classes.GoogleMaps}>
 
     <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyAW_L2rewYCrOhKzwV61hh6n4ofu47HXso', 
            language: 'en'
         }}
          zoom={15}
          style={mapStyles}
          defaultCenter={{ lat: 14.779873, lng: 121.017950}}
          initialCenter={{ lat: 14.779873, lng: 121.017950}}
        >

        {
          this.props.complaints ? 
          this.props.complaints.map((row) => {
            console.log('creating the markers')
             return <Markers  
              key={row.complaint_id}           
              onClick={null}
             lat={row.latitude} 
             lng={row.longitude}  /> 
          })
          :
          null
        }
            
        </GoogleMapReact>
        </div>
      }
    


  

}

const mapStateToProps = state => {
  return {
      success: state.usercomplaint.success,
      error: state.usercomplaint.error,
      complaints: state.complaint.complaints
  };
}

const mapDispatchToProps = dispatch => {
  return {
      getComplaints: () => dispatch(actions.callGetComplaint())
  }
}


  export default connect(mapStateToProps,mapDispatchToProps)(GoogleMaps);

