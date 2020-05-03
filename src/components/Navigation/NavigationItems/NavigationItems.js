import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import Logo from '../../Logo/Logo';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Events</NavigationItem>
        <NavigationItem link="/document" exact>Documents</NavigationItem>
        <Logo />
        <NavigationItem link="/complaint" exact>Complaints</NavigationItem>
        <NavigationItem link="/contact" exact>Contact Us</NavigationItem>
    </ul>

);

export default navigationItems;