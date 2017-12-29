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

  static addTask(task) {
    const request = new Request('http://localhost:5000/api/tasks/', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }), 
      body: JSON.stringify(task)
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static deleteTask(task) {
    const request = new Request(`http://localhost:5000/api/tasks/${task.id}`, {
      method: 'DELETE'
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default TasksApi;
