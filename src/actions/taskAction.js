import axios from 'axios';
import { connectionAdress } from '../config/axiosConfigLib';

export const getTasksForTaskManager = () => {

    return (dispatch) => {
        axios.get(connectionAdress)
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            dispatch()
            console.log(error);
        });
    };
};
