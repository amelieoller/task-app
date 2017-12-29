import React from "react";

const TaskList = ({ tasks, deleteTask }) => {
  const handleOnClick = task => {
    deleteTask(task);
  };

  return (
    <div className="row">
      <div className="col-6">
        <ul className="list-group">
          {tasks.map(task => (
            <li className="list-group-item" key={task.id}>
              <span>{task.name}</span>{" "}
              <button
                className="btn btn-danger"
                onClick={() => handleOnClick(task)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
