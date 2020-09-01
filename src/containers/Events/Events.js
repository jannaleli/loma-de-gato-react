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
import EventSummary from '../../components/EventSummary/EventSummary';
import Modal from '../../components/UI/Modal/Modal';
import ApplyClearance from '../ApplyClearance/ApplyClearance';
import Documents from '../Documents/Documents';
import ViewComplaint from '../ViewComplaint/ViewComplaint'


const useStyles = makeStyles (
  (theme) => (
    {
      root: {
        width: '100%',
      },
      paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
      },
      table: {
        minWidth: 750,
      },
      visuallyHidden: {
        border: 0,
        clip: 'rect(0 0 0 0)',
        height: 1,
        margin: 1,
        overflow: 'hidden',
        padding: 0,
        position: 'absolute',
        top: 20,
        width: 1,
      },
    }
  )
);

 
class Events extends Component {
  state = {
    closed: false,
    attachment_id: null,
    event_desc: null,
    
}




    componentDidMount () {
      this.props.callGetEvents()
    }
    ModalClosed = () => {
      console.log('Modal closed ');
      this.setState({
        closed: false
      });
    }

     ModalOpened = (props) => {
      this.setState({
        closed: true,
        attachment_id: props.attachment_id,
        event_desc: props.event_desc
      });


    }

    render () {
    const  classes = useStyles();
    const [dense, setDense] = React.useState(false);
        return(

          
            this.props.events ? 

            <React.Fragment>
              
                      <Modal show={this.state.closed} modalClosed={this.ModalClosed}>
                        {console.log(this.state.attachment_id)}
              <EventSummary
              image={this.state.attachment_id}
              desc={this.state.event_desc}
              modalClosed={this.ModalClosed}
              />
        </Modal>

<TableContainer component={Paper}>
            <Table className={classes.table} 
            size={dense ? 'small' : 'medium'} 
            aria-labelledby='tableTitle'
            aria-label='enhanced table'>
      
              <TableBody>
                {this.props.events.map((row) => (
                  <TableRow key={row.event_id} onClick={()=>this.ModalOpened(row)}>
                    <TableCell component="th" scope="row">
                    <img src={row.attachment_id} height="42" width="42" />
                    </TableCell>
                    <TableCell align="right">{row.event_desc}</TableCell>


                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

    
            </React.Fragment>
             : 
          
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