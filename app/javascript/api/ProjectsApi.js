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
    return fetchRequest("http://localhost:5000/api/projects/");
  }

  static createProject(project) {
    const request = new Request("http://localhost:5000/api/projects/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(project)
    });
    return fetchRequest(request);
  }

  static updateProject(project) {
    const request = new Request(`http://localhost:5000/api/projects/${project.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(project)
    });
    return fetchRequest(request);
  }

  static deleteProject(id) {
    const request = new Request(`http://localhost:5000/api/projects/${id}`, {
      method: "DELETE"
    });
    return fetchRequest(request);
  }
}

export default ProjectsApi;
