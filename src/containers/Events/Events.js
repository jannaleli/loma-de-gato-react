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


  
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  
 
class Events extends Component {
    componentDidMount () {
      this.props.callGetEvents()
    }

    render () {
       
        return ( <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
      
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">Calories</TableCell>


                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>);
       
          
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