import React from 'react';
import { connect } from 'react-redux';
import FullTaskInfo from '../FullTaskInfo/index';
import NewTaskInfo from '../NewTaskInfo/index';
import { saveTaskIntoTaskManager } from '../../actions/taskAction';



class TaskInfo extends React.Component{
        state = {
            correctTask: false,
            taskName:  '',
            taskDueDate: '',
            taskStartDate: '',
            taskIsCompleted: '',
            taskIsArchived: '',
            taskEstimatedEffort: '',
            taskActualEffort: '',
            taskPhysicalProgress: '',
            taskDescription: '',
            taskTags: null,
            taskId: [],
            taskProjectId: '',
            taskObjStatus: '',
            taskCreationDay: ''
        }
//тэги доделать
        correctTask = () => {
            const { taskToShow } = this.props;
            this.setState({correctTask: !this.state.correctTask},
                () => { this.setState({taskName: taskToShow.name,
                                    taskDueDate: taskToShow.due_date,
                                    taskStartDate: taskToShow.start_date,
                                    taskIsCompleted: taskToShow.is_completed,
                                    taskIsArchived: taskToShow.is_archived,
                                    taskEstimatedEffort: taskToShow.estimated_effort,
                                    taskActualEffort: taskToShow.actual_effort,
                                    taskPhysicalProgress: taskToShow.physical_progress,
                                    taskDescription: taskToShow.description,
                                    taskTags: taskToShow.tags,
                                    taskId: taskToShow.id,
                                    taskProjectId: taskToShow.project_id,
                                    taskCreationDay: taskToShow.creation_date,
                                    taskObjStatus: taskToShow.obj_status
                                }); }
                            );

        }

        handleFieldOnChange = (e) => {
            const { name, value } = e.target;
            this.setState({ [name] : value });
        }

        SaveNewTaskInfo = () => {
           this.setState({ correctTask: false});
           this.props.saveTaskIntoTaskManager(this.state);
        }

    render() {
        const { taskToShow } = this.props;
        return (

            <div className="task-wrapper">
                {taskToShow && !this.state.correctTask && <FullTaskInfo props={taskToShow} correctTask={this.correctTask} state={this.state}/>}
                {this.state.correctTask && <NewTaskInfo {...this.state} handleFieldOnChange={this.handleFieldOnChange} SaveNewTaskInfo={this.SaveNewTaskInfo}/>}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    let taskToShow = Number(ownProps.match.params.topicId);
    return {
        taskToShow: state.eventReducer.arrayOfTasks.find((task) => {return task.id === taskToShow;}),
        loadDataError: state.eventReducer.loadDataError,
        loadDataProcess: state.eventReducer.loadDataProcess,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        saveTaskIntoTaskManager: (data) => {dispatch(saveTaskIntoTaskManager(data));}
    };
};

export default connect(mapStateToProps, mapDispatchToProps )(TaskInfo);
