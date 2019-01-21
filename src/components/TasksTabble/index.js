import  React  from 'react';
import { connect } from 'react-redux';
import { errorDownloadData, downloadingProcess } from '../../library_constants/library';
import { Route } from 'react-router-dom';
import './style.css';

//components

import TaskShortInfo from '../TaskShortInfo';
import TaskInfo from '../TaskInfo/index';


class TasksTabble extends React.Component {

    render() {

        const { arrayOfTasks, loadDataError, loadDataProcess, match } = this.props;

        const taskItems = arrayOfTasks && arrayOfTasks.length ? arrayOfTasks.map((task, item) => {
            return (
                <TaskShortInfo task={task} key={task.id} item={item} match={match}/>
            );
        }) :
        <p>All tasks gone...</p>;

        return (
            <div className="main-section-tasks">
                <Route path={`${match.path}/:topicId`} component={TaskInfo} />
                <h2>Your Tasks</h2>
                <div className="main-section-tabble-of-tasks">
                    {loadDataError && <p>{errorDownloadData}</p>}
                    {loadDataProcess && <p>{downloadingProcess}</p>}
                    <div className="name-of-tasks-in-tabble">
                        <p></p>
                        <p></p>
                        <p>Name</p>
                        <p>Actual effort</p>
                        <p>Task estimated effort</p>
                        <p>Task due date</p>
                        <p>MyTags</p>
                    </div>
                    <div>
                        {taskItems}
                    </div>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {

    return {
        arrayOfTasks: state.eventReducer.arrayOfTasks,
        loadDataError: state.eventReducer.loadDataError,
        loadDataProcess: state.eventReducer.loadDataProcess,
    };
};



export default connect(mapStateToProps)(TasksTabble);
