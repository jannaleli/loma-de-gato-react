import React from 'react';
import { Icon } from 'semantic-ui-react';
import classes from './Markers.css';
const iconStyle = {  
  borderRadius: '10px',
  transform: 'matrix(-1, 0, 0, 1, 10, 0)'
} 
const Markers = (props) => {
  console.log('Markers entered')
    return(
     
      <div className={classes.Markers}>
         <Icon name="building" 
          size='big' 
           style={iconStyle} 
           onClick={props.onClick}
         /> 
           

      </div>
    )
}
export default Markers
