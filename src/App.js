import React, {Component} from 'react';
import './App.css';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Events from './containers/Events/Events';
import ViewComplaint from './containers/ViewComplaint/ViewComplaint';
import Documents from './containers/Documents/Documents';
import Contacts from './containers/Contacts/Contacts';
import ApplyClearance from './containers/ApplyClearance/ApplyClearance';
import ApplyPermit from './containers/ApplyPermit/ApplyPermit';
import Register from './containers/Register/Register';
import Login from './containers/Login/Login';
import CheckStatus from './containers/CheckStatus/CheckStatus';
import PostComplaint from './containers/PostComplaint/PostComplaint';
import { /*Link,*/ animateScroll as scroll } from "react-scroll";
import NavigationBar from './components/Navigation/NavigationScroll/NavigationBar';
import Section from './components/Navigation/NavigationScroll/Section';
import MainContainer from './containers/MainContainer/MainContainer';
import Modal from '../src/components/UI/Modal/Modal';
import Link from 'react-router-dom/Link';
import ApplicationContainer from './containers/ApplicationContainer/ApplicationContainer';
 
// import swal from '@sweetalert/with-react';
 
// import Modal from 'react-bootstrap/Modal';
// import ModalDialog from 'react-bootstrap/ModalDialog';
// import ModalHeader from 'react-bootstrap/ModalHeader';
// import ModalTitle from 'react-bootstrap/ModalTitle';
// import ModalBody from 'react-bootstrap/ModalBody';
// import ModalFooter from 'react-bootstrap/ModalFooter';





class App extends Component {

  state = {
    applyClearanceOpen: false,
    applyPermitOpen: false,
    checkStatusOpen: false
}


// clickApplyClearance = () => {

//     // this.setState({
//     //     applyClearanceOpen : true
//     // });
//     this.props.history.push('/apply-clearance');

  
 
// }

// clickApplyPermit = () => {
//   this.props.history.push('/apply-permit');
// }

// clickCheckStatus = () => {
//   this.props.history.push('/check-status');
//}

// clickApplyClearanceClose = () => {
//     this.setState({
//         applyClearanceOpen : false
//     }); 
// }

// clickApplyPermitClose = () => {
//     this.setState({
//         applyPermitOpen : false
//     }); 
// }

// clickCheckStatusClose = () => {
//     this.setState({
//         checkStatusOpen : false
//     }); 
// }

  componentDidMount () {
    
  }
  render () {


    let routes = (
      <Switch>
         <Route path="/" exact component={ApplicationContainer} />
       {/* <Route path="/document" exact component={Documents} />
        <Route path="/complaint" exact component={ViewComplaint} />
        <Route path="/contact" exact component={Contacts} /> */}
        <Route path="/apply-clearance" exact component={ApplyClearance} />
        <Route path="/apply-permit" exact component={ApplyPermit} />
        <Route path="/login" exact component={Login} />
         <Route path="/check-status" exact component={CheckStatus} />
        {/*<Route path="/post-complaint" exact component={PostComplaint} /> */}
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        
        <Redirect to="/" />
      </Switch>
    );

        let urls = [{'url': 'https://barangay-api.s3-ap-southeast-1.amazonaws.com/apply_clearance.jpg', 'title': 'Apply Clearance', 'subtitle': 'Apply Barangay Clearance'},
                      {'url': 'https://barangay-api.s3-ap-southeast-1.amazonaws.com/apply_permit.jpg', 'title': 'Apply Permit', 'subtitle': 'Apply Business Permit'},
                      {'url': 'https://barangay-api.s3-ap-southeast-1.amazonaws.com/check_status.jpg', 'title': 'Check Status', 'subtitle': 'Check Status'},
                      {'url': 'https://barangay-api.s3-ap-southeast-1.amazonaws.com/create_map.jpg', 'title': 'Show Map', 'subtitle': 'Show Map'}]



  
      let sections = (
        <React.Fragment>
         
              {
              /*  <ApplicationContainer /> <Modal show={this.state.applyClearanceOpen} modalClosed={this.clickApplyClearanceClose}>
  
      <ApplyClearance />
   
  </Modal>
  <Modal show={this.state.applyPermitOpen} modalClosed={this.clickApplyPermitClose}>

  <ApplyPermit />
  </Modal>
  <Modal show={this.state.checkStatusOpen} modalClosed={this.clickCheckStatusClose}>
          
  <CheckStatus />
  </Modal> */}


        {/* <Section
          dark={true}
          id="section1">
       {/* <Events /> */}
       {/* {      urls.map ( (row) =>  ( <MainContainer title={row.title} subtitle={row.subtitle} url={row.url} />  )    )}
       }*/}
      {/* <MainContainer title='Apply Clearance' subtitle='Apply Clearance' url='https://barangay-api.s3-ap-southeast-1.amazonaws.com/apply_clearance.jpg' clicked={this.clickApplyClearance} />
       <MainContainer title='Apply Permit' subtitle='Apply Permit' url='https://barangay-api.s3-ap-southeast-1.amazonaws.com/apply_permit.jpg' clicked={this.clickApplyPermit} />
       <MainContainer title='Check Status' subtitle='Check status' url='https://barangay-api.s3-ap-southeast-1.amazonaws.com/check_status.jpg' clicked={this.clickCheckStatus} />
       
   
      
        </Section> */}
        {/* <Section
        dark={true}
        id="section2"
      >
        <Documents />
      </Section> */}
        </React.Fragment>

      );
    return (
      <div>
                <NavigationBar />
           {routes} 
          {sections} 
        {/* <Layout>
         <NavigationBar />
           {routes} 
          {sections}
         
        </Layout> */}
      </div>
    );
  }
}



export default withRouter(App);
