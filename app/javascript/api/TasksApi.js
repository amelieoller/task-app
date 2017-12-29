class TasksApi {
  static getAllTasks() {
    return fetch("http://localhost:5000/api/tasks/")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        return error;
      });
  }

  static createTask(task) {
    const request = new Request("http://localhost:5000/api/tasks/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(task)
    });

    return fetch(request)
      .then(response => {
        return response.json();
      })
      .catch(error => {
        return error;
      });
  }

  static updateTask(task) {
    const request = new Request(`http://localhost:5000/api/tasks/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(task)
    });

    return fetch(request)
      .then(response => {
        return response.json();
      })
      .catch(error => {
        return error;
      });
  }

  static deleteTask(id) {
    const request = new Request(`http://localhost:5000/api/tasks/${id}`, {
      method: "DELETE"
    });

    return fetch(request)
      .then(response => {
        return response.json();
      })
      .catch(error => {
        return error;
      });
  }
}

export default TasksApi;
