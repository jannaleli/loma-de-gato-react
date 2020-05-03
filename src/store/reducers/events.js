
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const eventsinitialState = {
    events: null,
    error: false
};



const setEvents = (state, action) => {
    return updateObject (
        state, {
            events: 
                action.events
            
        }
    )
};

const setEventsFailed = (state, action) => {
    return updateObject(state, {error: true});
};

const eventsReducer = (state = eventsinitialState, action) => {
    switch( action.type ){
        case actionTypes.GET_EVENTS : return setEvents(state, action);
        case actionTypes.GET_EVENT_FAIL : return setEventsFailed(state, action);
        default: return state;
    }

};

export default eventsReducer;
