import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, deleteTask, updateTask }) => {
  return (
    <div className="row">
      <h3>Your Tasks:</h3>
      {tasks
        .sort(function(a, b) {
          return a.id - b.id;
        })
        .map(task => (
          <TaskItem
            task={task}
            deleteTask={deleteTask}
            updateTask={updateTask}
            key={task.id}
          />
        ))}
    </div>
  );
};

export default TaskList;
