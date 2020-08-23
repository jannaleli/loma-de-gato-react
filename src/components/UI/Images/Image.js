import React, { Component } from 'react';
import classes from './Image.css';
import {Motion, spring} from 'react-motion';
import ApplyClearance from '../ApplyClearance/ApplyClearance';
import ApplyPermit from '../ApplyPermit/ApplyPermit';
import CheckStatus from '../CheckStatus/CheckStatus';
import Modal from '../../components/UI/Modal/Modal';
import Grid from "@material-ui/core/Grid";
class Image extends Component {
 
    render () {
        return <React.Fragment>

            <Modal show={this.state.applyClearanceOpen} modalClosed={this.clickApplyClearanceClose}>
  
            <ApplyClearance />
            </Modal>
            <Modal show={this.state.applyPermitOpen} modalClosed={this.clickApplyPermitClose}>

            <ApplyPermit />
            </Modal>
            <Modal show={this.state.checkStatusOpen} modalClosed={this.clickCheckStatusClose}>
                    
            <CheckStatus />
            </Modal>

            <img src={this.props.url}
            onClick={this.props.onClick}
             width={'700px'}
              height={'500px'}/>
        </React.Fragment>
    }

}
export default Image;