import React, { Component } from 'react';
import classes from './GoogleMaps.css';
import GoogleMapReact from 'google-map-react';
const Marker = ({ text }) => <div>{text}</div>;

class GoogleMaps extends Component {



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
          zoom={8}
          style={mapStyles}
          defaultCenter={{ lat: 47.444, lng: -122.176}}

          initialCenter={{ lat: 47.444, lng: -122.176}}
        >
            {/* <Marker position={{ lat: 48.00, lng: -122.00}} /> */}
        </GoogleMapReact>
        </div>
      }
    


  

}

export default GoogleMaps;