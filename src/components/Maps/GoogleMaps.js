import React, { Component } from 'react';
import classes from './GoogleMaps.css';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class GoogleMaps extends Component {



      render () {
        const mapStyles = {
            width: '100%',
            height: '100%',
          };


          return         <div>
          <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        >
            <Marker position={{ lat: 48.00, lng: -122.00}} />
        </Map>
        </div>
      }
    


  

}

export default GoogleApiWrapper({
    apiKey: 'TOKEN HERE'
  })(GoogleMaps)