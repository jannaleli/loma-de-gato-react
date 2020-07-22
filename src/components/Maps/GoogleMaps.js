import React, { Component } from 'react';
import classes from './GoogleMaps.css';
import GoogleMapReact from 'google-map-react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Markers from './Markers/Markers'
import { Icon, Popup, Button } from 'semantic-ui-react'
class GoogleMaps extends Component {


    state = {
      markers: null
    }

    componentDidMount () {
        this.props.getComplaints()
    }

      render () {
        const InfoBox = (props) => {
          let googleMapLocation = "https://maps.google.com/?q=" + props.lat + ", " + props.lng
          let windowGoogleMap = `window.location= + ${googleMapLocation}`
        console.log(props)
        console.log(googleMapLocation)
        return (
          <div>
            <Popup trigger={<a target="_blank" href={googleMapLocation}><Icon onClick={windowGoogleMap} className="building icon" size='big' style={{transform: 'matrix(-1, 0, 0, 1, 10, 0)'}}/></a>} content={props.facility} position='top center' style={{marginLeft: '8px', backgroundColor: 'AliceBlue', border: 'solid 1px light', textAlign: 'center'}}/>
          </div>
          )
        }
        
       // const infoBox = this.state.hover === true ? <InfoBox lat={this.state.lat} lng={this.state.lng} facility={this.state.facilityName} googleMapLocation={googleMapLocation} /> : null
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
          zoom={17}
          style={mapStyles}
          defaultCenter={{ lat: 14.779873, lng: 121.017950}}
          initialCenter={{ lat: 14.779873, lng: 121.017950}}
        >

        {
          this.props.complaints ? 
          this.props.complaints.map((row) => {
            console.log('creating the markers')
             return <InfoBox 
                  lat={row.latitude} 
                  lng={row.longitude} 
                  facility={row.complaint_desc} 
                  // googleMapLocation={googleMapLocation} 
                  />
          })
          :
          null
        }

        {//This is where the building markers will between
        }

        {/* {
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
        } */}
            
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

