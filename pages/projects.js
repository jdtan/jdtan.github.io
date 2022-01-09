import React from "react";
import styled from "styled-components";

import ProjectCards from "../components/ProjectCard";

const projectData = [
  {
    title: "GitLab Analyzer",
    image: "project1-gitlab.png",
    tools: ["React", "Node.js", "Flask", "Heroku", "Docker"],
    description:
      "description goes here description goes heredescription goes here description goes here",
    link: "https://github.com/jdtan/gitlab-analyzer",
  },
  {
    title: "Tetris Game",
    image: "project3-tetris.png",
    tools: ["React", "HTML", "CSS"],
    description:
      "description goes here description goes heredescription goes here description goes here",
    link: "https://github.com/jdtan/tetris",
  },
  {
    title: "Rice Bowl Recipe",
    image: "project2-ricebowl.png",
    tools: ["React", "Node.js", "MongoDB", "Nginx"],
    description:
      "description goes here description goes heredescription goes here description goes here",
    link: "https://github.com/jdtan/rice-bowl-recipe",
  },
];

const ProjectContainer = styled.div`
  margin-top: 20px;
`;

const Projects = () => {
  return (
    <div id="projects" className="page" style={{}}>
      <div className="sectionTitle">
        My Projects<span className="accentColor">:</span>
      </div>
      <ProjectContainer>
        <ProjectCards projects={projectData} />
      </ProjectContainer>
    </div>
  );
};

export default Projects;
