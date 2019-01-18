import { combineReducers } from 'redux';
import  eventReducer  from './eventsReducer/eventReducer';

const rootReducer = combineReducers({
    eventReducer: eventReducer
});

export default rootReducer;
