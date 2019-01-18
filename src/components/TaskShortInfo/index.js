import React from 'react';
import './style.css';

class TaskShortInfo extends React.Component {


    render(){
        // console.log(this.props.task)
        const { task, item } = this.props;
        return (
            <>
            <div className="task-row">
                <p>{item + 1}</p>
                <p>{task.name}</p>
                <p>{task.actual_effort}</p>
                <p>{task.estimated_effort}</p>
                <p style={{width: '200px'}}>{task.due_date}</p>
                <p>{task.tags}</p>
                <p>{task.is_high_priority}</p>
            </div>
            </>
        );
    }
}

export default TaskShortInfo;
