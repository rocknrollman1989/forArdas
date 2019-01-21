import axios from 'axios';
import { connectionAdress } from '../config/axiosConfigLib';
import { LOAD_ERROR_DATA, LOAD_DATA_PROCESS, LOAD_DATA_DONE, SAVE_CORRECT_TASK } from '../library_constants/constantsRedux';
import { formatDate, formatDateToISOSString } from '../helpers/dateParseFunct';

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
            actualDataToShow.forEach((item) => {
               if (item.due_date){ item.due_date = formatDate(item.due_date);}
               if (item.creation_date){ item.creation_date = formatDate(item.creation_date);}
               if (item.start_date){ item.start_date = formatDate(item.start_date);}
            });
            dispatch(enterDataToStore({actualDataToShow}));
        })
        .catch((error) => {
            dispatch(loadError());
            console.log(error);
        });
    };
};

export const saveTaskIntoTaskManager = (data) => {
    return (dispatch) => {
        // console.log(data);
        let taskToSave = {
            id: data.taskId,
            name: data.taskName,
            creation_date: formatDateToISOSString(data.taskCreationDay),
            due_date: formatDateToISOSString(data.taskDueDate),
            start_date: formatDateToISOSString(data.taskStartDate),
            is_completed: data.taskIsCompleted,
            is_archived: data.taskIsArchived,
            estimated_effort: data.taskEstimatedEffort,
            actual_effort: data.taskActualEffort,
            physical_progress: data.taskPhysicalProgress,
            obj_status: data.taskObjStatus,
            description: data.taskDescription,
            project_id: data.taskProjectId,
            tags: data.taskTags,
        };
        axios.put(`${connectionAdress}/${data.taskId}`, taskToSave)
        .then((taskToSave) => {
            dispatch({
                type: SAVE_CORRECT_TASK,
                ...taskToSave
            });
        })
        .catch((error) => {
            console.log(error);
        });
    };
};
