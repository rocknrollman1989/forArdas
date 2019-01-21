import React from 'react';
import './style.css';

const FullTaskInfo = ({props, correctTask, state }) => {

    const tags = props.tags && props.tags.length > 0 ? props.tags.map((elem, i) => {
        return <span key={i}> #{elem}</span>;
    }) : null;

    const archived = state.taskIsArchived || props.is_archived ? <p>archived</p> : <p> not archived</p>;
    const completed = state.taskIsCompleted ||  props.is_completed ? <p>completed!:)</p> : <p> not completed</p>;

    return (
        <>
        <div className="task-info-field">
            <p onClick={()=>{correctTask();}} className="accent-name">{state.taskName || props.name}</p>
            <p>{ state.taskActualEffort || props.actual_effort}</p>
            <p>{state.taskEstimatedEffort || props.estimated_effort}</p>
            <p>{state.taskDueDate || props.due_date}</p>
            <p>{state.taskPhysicalProgress || props.physical_progress}</p>
            <p>{state.taskStartDate || props.start_date}</p>
            <p>{props.creation_date}</p>
            <p>{state.taskDescription || props.description}</p>
            {archived}
            {completed}
            <p>{state.taskTags || tags}</p>
        </div>
        </>
    )

}

export default FullTaskInfo;
