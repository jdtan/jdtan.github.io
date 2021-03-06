import React from "react";
import styled from "styled-components";

import ProjectCards from "../components/ProjectCard";

const projectData = [
  {
    title: "GitLab Analyzer",
    image: "project1-gitlab.png",
    tools: ["React", "Node.js", "Flask", "Docker"],
    description:
      "A web application for analyzing activity and data of GitLab repositories.",
    link: "https://github.com/jdtan/gitlab-analyzer",
  },
  {
    title: "Tetris Game",
    image: "project3-tetris.png",
    tools: ["React", "HTML", "CSS"],
    description:
      "A Tetris-inspired line-clearing puzzle game with a drive drawn from the Tetris effect.",
    link: "https://github.com/jdtan/tetris",
  },
  {
    title: "Rice Bowl Recipe",
    image: "project2-ricebowl.png",
    tools: ["React", "Node.js", "MongoDB", "Nginx"],
    description:
      "A web application that saves, organises, and reads your favourite recipes.",
    link: "https://github.com/jdtan/rice-bowl-recipe",
  },
];

const ProjectContainer = styled.div`
  margin-top: 20px;
`;

const Projects = () => {
  return (
    <div id="projects" className="page">
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
