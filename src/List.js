import React from 'react';

function Task(props){
    return (        
      <div>
        <input type="text" class="form-control" value={props.value} onChange={props.onChange} />
        <br></br>
         <button  class="btn btn-info"  onClick={props.addTask}>Add Task</button>
      </div>
      )
}


export default Task;