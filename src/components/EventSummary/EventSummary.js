import React from 'react';
import Button from '../../components/UI/Button/Button';
import classes from './EventSummary.css';


const eventSummary = (props) => {
    console.log('event summary')
    console.log(props.image)
    console.log(props.desc)
    console.log(props.modalClosed)
    return (
        <div className={classes.EventSummary}>
             <img src={props.image} height="42" width="42"  />
            <h1>{props.title}</h1>
            <div style={{width: '100%', margin: 'auto'}}>
                {props.desc}
            </div>
            <Button btnType="Success" clicked ={props.modalClosed}>Close</Button>
        </div>
   
        
    )
}

export default eventSummary;