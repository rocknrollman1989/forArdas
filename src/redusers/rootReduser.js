import { combineReducers } from 'redux';
import { eventReduser } from './eventsReduser/eventReduser';

export const rootReduser = combineReducers({
    ...eventReduser
});
