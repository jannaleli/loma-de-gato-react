import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import Logo from '../../Logo/Logo';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
           <Logo />
        <NavigationItem link="/" exact>Events</NavigationItem>
        <NavigationItem link="/document" exact>Documents</NavigationItem>
        <NavigationItem link="/complaint" exact>Complaints</NavigationItem>
        <NavigationItem link="/contact" exact>Contact Us</NavigationItem>
        <NavigationItem link="/register" exact>Register</NavigationItem>
        <NavigationItem link="/login" exact>Login</NavigationItem>
    </ul>

);

export default navigationItems;