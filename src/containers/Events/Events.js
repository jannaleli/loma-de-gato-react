import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Amplify, { API, Auth } from 'aws-amplify';
import { Table } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {getImage }  from '../../shared/api';



 
class Events extends Component {
    componentDidMount () {
      this.props.callGetEvents()
    }

    render () {
     
      if(this.props.events !== null){
        this.props.events.map((row) => (

          getImage(row.attachment_id)
        )
         
        )
      }
        
   
      
     

       
        return(

      
          
            this.props.events ? 
            <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
      
              <TableBody>
                {this.props.events.map((row) => (
                  <TableRow key={row.event_desc}>
                    <TableCell component="th" scope="row">
                      {row.attachment_id}
                    </TableCell>
                    <TableCell align="right">Calories</TableCell>


                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer> : 
          
          null
          
          

        );
        
   
        

       
          
    } 
};


const mapStateToProps = state => {
    return {
        events: state.events.events,
        error: state.events.error,
        success: state.events.success
    };
}

const mapDispatchToProps = dispatch => {
    return {
      callGetEvents: () => dispatch(actions.callGetEvents())
    }
}

export default connect(mapStateToProps,mapDispatchToProps )(Events);