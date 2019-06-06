import React from "react";
import ProjectItem from "./ProjectItem";

const ProjectList = ({ projects, deleteProject, updateProject, checkProject }) => {
  return (
    <div>
      {projects && projects
        .sort(function(a, b) {
          return a.completed - b.completed || a.id - b.id;
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
    </div>
  );
};

export default ProjectList;