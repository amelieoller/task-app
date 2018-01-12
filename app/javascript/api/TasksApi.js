const url = "https://react-rails-task-app.herokuapp.com"

const fetchRequest = url => {
  return fetch(url)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      return error;
    });
};

class TasksApi {
  static getAllTasks() {
    return fetchRequest(`${url}/api/tasks/`);
  }

  static createTask(task) {
    const request = new Request(`${url}/api/tasks/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(task)
    });
    return fetchRequest(request);
  }

  static updateTask(task) {
    const request = new Request(`${url}/api/tasks/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(task)
    });
    return fetchRequest(request);
  }

  static deleteTask(id) {
    const request = new Request(`${url}/api/tasks/${id}`, {
      method: "DELETE"
    });
    return fetchRequest(request);
  }
}

export default TasksApi;
