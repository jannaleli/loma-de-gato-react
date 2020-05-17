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
class App extends Component {

  componentDidMount () {
    
  }
  render () {

    let routes = (
      <Switch>
        <Route path="/" exact component={Events} />
        <Route path="/document" exact component={Documents} />
        <Route path="/complaint" exact component={ViewComplaint} />
        <Route path="/contact" exact component={Contacts} />
        <Route path="/apply-clearance" exact component={ApplyClearance} />
        <Route path="/apply-permit" exact component={ApplyPermit} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/check-status" exact component={CheckStatus} />
        <Route path="/post-complaint" exact component={PostComplaint} />
        <Redirect to="/" />
      </Switch>
    );

      

 

    return (
      <div>
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}



export default withRouter(App);
