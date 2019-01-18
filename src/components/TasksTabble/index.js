import  React  from 'react';
import { connect } from 'react-redux';
import { errorDownloadData, downloadingProcess } from '../../library_constants/library';
import TaskShortInfo from '../TaskShortInfo';


class TasksTabble extends React.Component {


    render() {
        const { arrayOfTasks, loadDataError, loadDataProcess } = this.props;

        const taskItems = arrayOfTasks.length > 0 ? arrayOfTasks.map((task, item) => {
            return (
                <TaskShortInfo task={task} key={task.id} item={item}/>
            );
        }) :
        <p>All tasks gone...</p>;

        return (
            <div className="main-section-tasks">
                <h2>Tasks manager</h2>
                <div className="main-section-tabble-of-tasks">
                    {loadDataError ? <p>{errorDownloadData}</p> : null}
                    {loadDataProcess ? <p>{downloadingProcess}</p> : null}
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
