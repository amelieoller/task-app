import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, deleteTask, updateTask, checkTask }) => {
  return (
    <ul className="list-group">
      {tasks
        .sort(function(a, b) {
          return a.id - b.id;
        })
        .map(task => (
          <TaskItem
            task={task}
            deleteTask={deleteTask}
            updateTask={updateTask}
            checkTask={checkTask}
            key={task.id}
          />
        ))}
    </ul>
  );
};

export default TaskList;
