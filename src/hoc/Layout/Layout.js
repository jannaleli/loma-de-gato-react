import React, { Component } from 'react';
import { connect } from 'react-redux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false,
    
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }


    render () {
        return (
            <React.Fragment>
               {/*this.props.isAuthenticated instead of true*/} 
              {/* <Toolbar isAuth={true}
                drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    isAuth={true}
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} /> */}

                 <main className={classes.Content}>
                    {this.props.children}
                </main> 
            </React.Fragment>
        )
    }
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect( mapStateToProps )( Layout );

