import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import Logo from '../../Logo/Logo';
import { /*Link,*/ animateScroll as scroll } from 'react-scroll';
import classes from './NavigationBar.css';
export default class NavigationBar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
     

       <nav className={classes.NavigationBar} id="navbar">
         <Logo />
        <div className={classes.NavigationContent}>
          
       
          {/* <img
            src={logo}
            className="nav-logo"
            alt="Logo"
            onClick={this.scrollToTop}
          />
     
          <ul className={classes.NavigationUnordered}> 
          <li className={classes.NavigationList}>
              <Link
                activeClass={classes.active}
                to="/apply-clearance"
           
              >
                Events
              </Link>
            </li>
            <li className={classes.NavigationList}>
              <Link
                activeClass={classes.active}
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Documents
              </Link>
            </li>
            <li className={classes.NavigationList}> 
              <Link
                activeClass={classes.active}
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
               Complaints
              </Link>
            </li>
            <li className={classes.NavigationList}> 
              <Link
                activeClass={classes.active}
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Contact Us
              </Link>
            </li>

          </ul> */}
        </div>
      </nav>
    
  
    );
  }
}