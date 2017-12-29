import React from "react";

const TaskList = ({ tasks, deleteTask }) => {
  const handleOnClick = task => {
    deleteTask(task);
  };

  return (
    <div className="row">
      <h3>Your Tasks:</h3>
      {tasks.map(task => (
        <div className="col-12">
          <div class="input-group mb-3">
            <input type="text" value={task.name} />
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button">
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => handleOnClick(task)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
