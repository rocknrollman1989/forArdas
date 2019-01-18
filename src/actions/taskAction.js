import axios from 'axios';
import { connectionAdress } from '../config/axiosConfigLib';
import { LOAD_ERROR_DATA, LOAD_DATA_PROCESS, LOAD_DATA_DONE } from '../library_constants/constantsRedux';

export const loadError = () => {
    return {
        type: LOAD_ERROR_DATA
    };
};

export const loadDataTimer = () => {
    return {
        type: LOAD_DATA_PROCESS
    };
};

export const enterDataToStore = (data) => {
    return {
        type: LOAD_DATA_DONE,
        data: data.actualDataToShow
    };
};

export const getTasksForTaskManager = () => {
    return (dispatch) => {
        dispatch(loadDataTimer());
        axios.get(connectionAdress)
        .then((data) => {
            let actualDataToShow = data.data.filter((item) => {
                return item.obj_status === 'active';
            });
            dispatch(enterDataToStore({actualDataToShow}));
        })
        .catch((error) => {
            dispatch(loadError());
            console.log(error);
        });
    };
};
