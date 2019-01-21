import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class TaskShortInfo extends React.Component {

    render(){

        const { task, item, match } = this.props;
        const myTags = task.tags && task.tags.length ? task.tags.map((elem, i) => {
                    return <span key={i}> #{elem}</span>;
                }) : null;
        //////////// image!! кинуть!!
        return (
            <>
            <div className="task-row">
                <p>{item + 1}</p>
                {task.is_high_priority ? <p>{task.is_high_priority}</p> : <p/>}
                <Link to={`${match.url}/${task.id}`}><p className={task.is_high_priority ? 'impornant-task' : ' '} >{task.name}</p></Link>
                <p>{task.actual_effort}</p>
                <p>{task.estimated_effort}</p>
                <p style={{width: '200px'}}>{task.due_date}</p>
                <p>{myTags}</p>
            </div>
            </>
        );
    }
}

export default TaskShortInfo;
