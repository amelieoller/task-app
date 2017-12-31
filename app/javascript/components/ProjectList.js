import React from "react";
import ProjectItem from "./ProjectItem";

const ProjectList = ({ projects, deleteProject, updateProject, checkProject }) => {
  return (
    <ul className="list-group">
      {projects
        .sort(function(a, b) {
          return a.id - b.id;
        })
        .map(project => (
          <ProjectItem
            project={project}
            deleteProject={deleteProject}
            updateProject={updateProject}
            checkProject={checkProject}
            key={project.id}
          />
        ))}
    </ul>
  );
};

export default ProjectList;