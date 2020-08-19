import React, {Component} from 'react';
import { connect } from 'react-redux';
import classes from './MainContainer.css';
import {Motion, spring} from 'react-motion';
import { container } from 'aws-amplify';
class MainContainer extends Component {

    state = {
        isHover: false
    }

    handleHover = (state) => {
        this.setState({isHover: state});
    }

    getSpringProps = () => {
        return {
            defaultStyle : {
                scale: 1.15,
                marginTop: 25,
                imageOpacity: 0.7,
                opacity: 0,
            },
            style: {
                scale: spring(this.state.isHover ? 1: 1.15),
                marginTop: spring(this.state.isHover ? 22: 25),
                imageOpacity: spring(this.state.isHover ? 0.4: 0.7),
                opacity: spring(this.state.isHover ? 1 : 0)
            },
        };
    }
    render () {

        let urls = [{'url': 'https://barangay-api.s3-ap-southeast-1.amazonaws.com/apply_clearance.jpg', 'title': 'Apply Clearance', 'subtitle': 'Apply Barangay Clearance'},
                      {'url': 'https://barangay-api.s3-ap-southeast-1.amazonaws.com/apply_permit.jpg', 'title': 'Apply Permit', 'subtitle': 'Apply Business Permit'},
                      {'url': 'https://barangay-api.s3-ap-southeast-1.amazonaws.com/check_status.jpg', 'title': 'Check Status', 'subtitle': 'Check Status'},
                      {'url': 'https://barangay-api.s3-ap-southeast-1.amazonaws.com/create_map.jpg', 'title': 'Show Map', 'subtitle': 'Show Map'}]



        
        return <div className={classes.MainContainer}>
            <Motion {...this.getSpringProps()}>
             {tweenCollection => {
                 let styleImage = {
                     transform: 'scale(' + tweenCollection.scale + ')',
                     opacity: tweenCollection.imageOpacity
                 };
                 let styleTitle = {
                     marginTop: tweenCollection.marginTop + '%',
                 };
                 let styleSubtitle = {
                     opacity: tweenCollection.opacity,
                 };
                 return (

                    <React.Fragment>
                   {/* <div className={classes.MainSubContainer}
                        onMouseOver={() => this.handleHover(true)}
                        onMouseOut={() => this.handleHover(false)}>
                        <div className={classes.MainImageContainer}>
                        <img
                        style={styleImage}
                        src='https://tympanus.net/Development/HoverEffectIdeas/img/13.jpg'
                        className='img' />  
                        <div className={classes.Overlay}>
                            <div className='title' style={styleTitle}>{row.title}</div>
                            <div className='subtitle' style={styleSubtitle}>
                                 <div className='subtitleText'>{row.subtitle}</div>
                            </div>
                        </div>  
                        
                        </div>   

                    </div> */}

                    { urls.map ( (row) =>  (
                            <div className={classes.MainSubContainer}
                            onMouseOver={() => this.handleHover(true)}
                            onMouseOut={() => this.handleHover(false)}>
                            <div className={classes.MainImageContainer}>
                            <img
                            style={styleImage}
                            width={'500px'}
                            height={'500px'}
                            src={row.url}
                            className='img' />  
                            <div className={classes.Overlay}>
                                <div className='title' style={styleTitle}>{row.title}</div>
                                <div className='subtitle' style={styleSubtitle}>
                                    <div className='subtitleText'>{row.subtitle}</div>
                                </div>
                            </div>  
                            
                            </div>   

                        </div>
         )

        )}
                    </React.Fragment>
 
                 );

             }

            }

            </Motion>
        </div>

    }
}

export default MainContainer;