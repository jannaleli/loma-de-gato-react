import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import Amplify, { API, Auth } from 'aws-amplify';
import  classes  from './CheckStatus.css';
import TextField from '@material-ui/core/TextField';
import { Table } from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
class CheckStatus extends Component {
    state = {
        detailsOpen: false
    }
    componentDidMount () {
        this.props.getDocument()
        this.props.getPermit()
    
    }

     detailOpen = () => {
        console.log('detail open!!')
    }


    render () {

       const permit =  this.props.permit ? this.props.permit.map((row) => (
            <TableRow key={row.user_id} onClick={()=>this.detailOpen(row)}>
              <TableCell component="th" scope="row">
              <img src={row.user_id} height="42" width="42" />
              </TableCell>
              <TableCell align="right">{row.status}</TableCell>


            </TableRow>
          )) : null
        console.log('loading permit')
        console.log(permit)
        const document = this.props.document ? this.props.document.map((row) => (
            <TableRow key={row.user_id} onClick={()=>this.detailOpen(row)}>
              <TableCell component="th" scope="row">
              <img src={row.user_id} height="42" width="42" />
              </TableCell>
              <TableCell align="right">{row.status }</TableCell>


            </TableRow>
          )) : null
          console.log('loading document')
          console.log(document)
       
        return <div className={classes.CheckStatus}>
            <h1>CheckStatus</h1>
            <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
      
              <TableBody>
                {permit}
                {document}
              </TableBody>
            </Table>
          </TableContainer>
            </div>;
    } 
};


const mapStateToProps = state => {
    return {
        permit: state.permits.permit,
        document: state.document.documents
      
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getPermit: () => dispatch(actions.callGetPermit()),
        getDocument: () => dispatch(actions.callGetDocument())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CheckStatus);