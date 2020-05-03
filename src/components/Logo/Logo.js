import React from 'react';
import lomaDeGato from '../../assets/images/logo.png';
import classes from './Logo.css';

const logo = (props) => {
    console.log(props.height);
  return  <div className={classes.Logo} style={{height: props.height}}>
        <img src={lomaDeGato} alt="icon" />
    </div>
};

export default logo;