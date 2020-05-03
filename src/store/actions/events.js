import * as actionTypes from './actionTypes';

import { EVENTS_PATH, LOMA_API_NAME } from '../../aws-configure';
import { API } from 'aws-amplify';
export const getEvents = (events) => {
    return {
        type: actionTypes.GET_EVENTS,
        events: events
    };
};


export const getEventstFail = (error) => {
    return {
        type: actionTypes.GET_EVENT_FAIL,
        error: error
    };
};


export const callGetEvents= () => {
           

    const params = {
        headers : {
            'Content-Type': 'application/json',
            'Accept': '*/*',
            'Host': 'mjdjlvb5x9.execute-api.ap-southeast-1.amazonaws.com',
            'Accept-Encoding': 'gzip, deflate',
            'Content-Length': '243',
            'Connection': 'keep-alive',
        },

    };
    return dispatch => {
        API
        .get(LOMA_API_NAME, EVENTS_PATH, params)
        .then(response => {
          // Add your code here
          var obj = JSON.parse(response.data);

          dispatch(getEvents(response.data));
        })
        .catch(error => {
          console.log(error.response);
          dispatch(getEventstFail(error.response))
       });
    };

};

