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

      render () {
        const mapStyles = {
            width: '100%',
            height: '100vh'
          };

        console.log('Google Maps')
          return         <div className={classes.GoogleMaps}>
 
     <GoogleMapReact
          bootstrapURLKeys={{
            key: 'AIzaSyAW_L2rewYCrOhKzwV61hh6n4ofu47HXso', 
            language: 'en'
         }}
          zoom={12}
          style={mapStyles}
          defaultCenter={{ lat: 14.779873, lng: 121.017950}}
          initialCenter={{ lat: 14.779873, lng: 121.017950}}
        >
            <Markers             onClick={null}
             lat={14.779873} 
             lng={121.017950}  /> 
        </GoogleMapReact>
        </div>
      }
    


  

}

const mapStateToProps = state => {
  return {
      success: state.usercomplaint.success,
      error: state.usercomplaint.error
  };
}

const mapDispatchToProps = dispatch => {
  return {
      GetComplaints: (complaint) => dispatch(actions.callGetComplaint())
  }
}


  export default connect(mapStateToProps,mapDispatchToProps)(GoogleMaps);

