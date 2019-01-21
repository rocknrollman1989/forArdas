import  React  from 'react';
import { connect } from 'react-redux';
import { errorDownloadData, downloadingProcess } from '../../library_constants/library';
import TaskShortInfo from '../TaskShortInfo';
import TaskInfo from '../TaskInfo/index';
import { Route } from 'react-router-dom';



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
                <h2>Tasks manager</h2>
                <div className="main-section-tabble-of-tasks">
                    {loadDataError && <p>{errorDownloadData}</p>}
                    {loadDataProcess && <p>{downloadingProcess}</p>}
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

const mapDispatchToProps = (dispatch) => {
    return {

    };
};


export default connect(mapStateToProps, mapDispatchToProps)(TasksTabble);
