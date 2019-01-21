import React from 'react';

const NewTaskInfo = (props) => {

    return (
        <div>
            <form>
                <input type="text" value={props.taskName} name='taskName' onChange={(e) => {props.handleFieldOnChange(e);}}  onBlur = {() => { props.SaveNewTaskInfo();}}/>
                <input type="text" value={props.taskActualEffort} name='taskActualEffort' onChange={(e) => {props.handleFieldOnChange(e);}}/>
                <input type="text" value={props.taskEstimatedEffort} name='taskEstimatedEffort' onChange={(e) => {props.handleFieldOnChange(e);}}/>
                <input type="text" value={props.taskDueDate} name='taskDueDate' onChange={(e) => {props.handleFieldOnChange(e);}}/>
                <input type="text" value={props.taskPhysicalProgress} name='taskPhysicalProgress' onChange={(e) => {props.handleFieldOnChange(e);}}/>
                <input type="text" value={props.taskStartDate} name='taskStartDate' onChange={(e) => {props.handleFieldOnChange(e);}}/>
                <input type="text" value={props.taskDescription} name='taskDescription' onChange={(e) => {props.handleFieldOnChange(e);}}/>
                <input type="text" value={props.taskIsArchived} name='taskIsArchived' onChange={(e) => {props.handleFieldOnChange(e);}}/>
                <input type="text" value={props.taskIsCompleted} name='taskIsCompleted' onChange={(e) => {props.handleFieldOnChange(e);}}/>
                <input type="text" value={props.taskTags || ''} name='taskTags' onChange={(e) => {props.handleFieldOnChange(e);}}/>
                <input type="button" value="save" onClick = {() => { props.SaveNewTaskInfo();}}/>
            </form>
        </div>
    );

};

export default NewTaskInfo;
