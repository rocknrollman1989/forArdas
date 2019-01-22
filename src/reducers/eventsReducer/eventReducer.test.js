import reducer, { initState } from './eventReducer';
import * as t from '../../library_constants/constantsRedux';

describe('State test', () => {

    it('LOAD_DATA_PROCESS', () => {
        const action = {
            type: t.LOAD_DATA_PROCESS,
            loadDataProcess: true
        };
        
    expect(reducer(initState, action)).toEqual({
        ...initState,
        loadDataProcess: true
        });
    });

    it('LOAD_DATA_DONE', () => {
        const action = {
            type: t.LOAD_DATA_DONE,
            data: [1,2,3,4,5,6,7],
            loadDataProcess: false
        };

    expect(reducer(initState, action)).toEqual({
        ...initState,
        loadDataProcess: false,
        arrayOfTasks: action.data,
        });
    });

});
