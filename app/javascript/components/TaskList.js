import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, deleteTask, updateTask, checkTask }) => {
  return (
    <div className="task-list">
      {tasks && tasks
        .sort(function(a, b) {
          return a.completed - b.completed || a.priority - b.priority;
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
    </div>
  );
};

export default TaskList;
