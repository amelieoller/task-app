const url = "https://react-rails-task-app.herokuapp.com/"

const fetchRequest = url => {
  return fetch(url)
    .then(response => {
      return response.json();
    })
    .catch(error => {
      return error;
    });
};

class ProjectsApi {
  static getAllProjects() {
    return fetchRequest(`${url}/api/projects/`);
  }

  static createProject(project) {
    const request = new Request(`${url}/api/projects/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(project)
    });
    return fetchRequest(request);
  }

  static updateProject(project) {
    const request = new Request(`${url}/api/projects/${project.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(project)
    });
    return fetchRequest(request);
  }

  static deleteProject(id) {
    const request = new Request(`${url}/api/projects/${id}`, {
      method: "DELETE"
    });
    return fetchRequest(request);
  }
}

export default ProjectsApi;
