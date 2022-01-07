import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

import Icon from "./Icons/Icons";

const ProjectCard = styled.div`
  width: 300px;
  height: 335px;
  border-radius: 20px;
  position: relative;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  margin: 20px;
`;

const ProjectTitle = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  /* color: #6a5e7b; */
  color: ${(props) => (props.makeWhite ? "white" : props.altColor)};
  font-weight: 700;
  font-size: 24px;
  position: relative;
  z-index: 100;
`;

const ImageContainer = styled.div`
  width: 60%;
  height: calc(100% - 36px);
  position: relative;
  margin: auto;
  margin-top: -20px;
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;

const ChipContainer = styled.div`
  position: absolute;
  inset: auto 20px 85px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const SingleChip = styled.div`
  background: #ffffff;
  border-radius: 20px;
  display: flex;
  width: fit-content;
  padding: 0px 12px;
  font-size: 0.8em;
  font-weight: 300;
  margin: 3px;
`;

const StyledButton = styled.button`
  position: absolute;
  inset: auto 20px 25px 20px;
  display: flex;
  width: calc(100% - 40px);
  justify-content: center;
  font-weight: 600;
  font-size: 0.8em;
  background: #ff5d73;
  border-radius: 10px;
  border: none;
  color: white;
`;

const ButtonContent = styled.div`
  display: flex;
  height: 45px;
  align-items: center;
`;

const IconContainer = styled.div`
  width: 30px;
  margin-right: 10px;
`;

const DescriptionContainer = styled.div`
  position: absolute;
  inset: 60px 20px auto 20px;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  font-size: 0.8em;
  line-height: 1.2em;
  color: white;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ProjectCards = ({ projects = [] }) => {
  const [detailVisible, setDetailVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  const projectColors = [
    { bg: "#e4ddec", text: "#6a5e7b" },
    { bg: "#BCD2E3", text: "#6c8faa" },
    { bg: "#FFF2F4", text: "#B88089" },
    { bg: "#D8EDE8", text: "#96C5B9" },
    { bg: "#E6D2E7", text: "#B69CB8" },
  ];

  const theTools = ["React", "Node.js", "Flask", "Heroku", "Docker"];

  const renderChips = (tools) =>
    tools.map((item) => <SingleChip>{item}</SingleChip>);

  const handleMouseEnter = (currProject) => {
    setDetailVisible(true);
    setActiveProject(currProject);
  };

  return (
    <CardContainer>
      {projects.map((item, index) => (
        <ProjectCard
          style={{ backgroundColor: projectColors[index].bg }}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => setDetailVisible(false)}
        >
          <ProjectTitle
            makeWhite={detailVisible && activeProject === index}
            altColor={projectColors[index].text}
          >
            {item.title}
          </ProjectTitle>
          <ImageContainer>
            <Image
              src={"/assets/" + item.image}
              layout="fill"
              objectFit="contain"
            />
          </ImageContainer>
          {detailVisible && index === activeProject && (
            <ProjectOverlay>
              <DescriptionContainer>{item.description}</DescriptionContainer>
              <ChipContainer>{renderChips(item.tools)}</ChipContainer>
              <StyledButton onClick={() => window.open(item.link)}>
                <ButtonContent>
                  <IconContainer>
                    <Icon type={"Github"} fill={"white"} />
                  </IconContainer>
                  View on Github
                </ButtonContent>
              </StyledButton>
            </ProjectOverlay>
          )}
        </ProjectCard>
      ))}
    </CardContainer>
  );
};

export default ProjectCards;
