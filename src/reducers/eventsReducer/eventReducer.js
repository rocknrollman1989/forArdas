import { LOAD_ERROR_DATA, LOAD_DATA_PROCESS, LOAD_DATA_DONE, SAVE_CORRECT_TASK } from '../../library_constants/constantsRedux';

const initState = {
    arrayOfTasks: [],
    loadDataError: false,
    loadDataProcess: false

};

const eventReducer = (state = initState, action) => {

    // console.log(action, state);

    switch (action.type){
        case LOAD_ERROR_DATA:
            return {
                ...state,
                loadDataError: true
            };
        case LOAD_DATA_PROCESS:
            return {
                ...state,
                loadDataProcess: true

            };
        case LOAD_DATA_DONE:
            return {
                ...state,
                loadDataProcess: false,
                arrayOfTasks: action.data,

            };
        case SAVE_CORRECT_TASK:
                let changeTasks = state.arrayOfTasks.map((item) => {
                    if ( item.id === action.data.id ) {
                      item = action.data;
                    }
                    return item;
                });
            return {
                ...state,
                arrayOfTasks: [...changeTasks ]
            }
        default: break;
    }
    return state;
};

export default eventReducer;
