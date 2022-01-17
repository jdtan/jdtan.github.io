import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

import Icon from "./Icons/Icons";
import screenSize from "./ScreenSizes";

const ProjectCard = styled.div`
  width: 300px;
  height: 335px;
  border-radius: 20px;
  position: relative;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
  margin: 20px;
  max-width: 90vw;
  @media only screen and (max-width: ${screenSize["m-tablet"]}) {
    width: 35em;
    height: 20em;
    margin: 0.5em auto;
  }
  @media only screen and (max-width: ${screenSize["mobile"]}) {
    width: 100%;
    /* min-height: 200px; */
    height: 15em;
    margin: 5px 0px;
  }
`;

const ProjectTitle = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
  /* color: #6a5e7b; */
  color: ${(props) => (props.makeWhite ? "white" : props.altColor)};
  font-weight: 500;
  /* font-size: 28px; */
  font-size: 2.8rem;
  position: relative;
  z-index: 100;
  @media only screen and (max-width: ${screenSize["mobile"]}) {
    padding-top: 14px;
    /* font-size: 24px; */
    font-size: 2.4rem;
  }
`;

const ImageContainer = styled.div`
  width: 150px;
  height: 150px;
  position: relative;
  margin: auto;
  @media only screen and (max-width: ${screenSize["mobile"]}) {
    width: 100px;
    height: 100px;
  }
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  border-radius: 20px;
  padding: 1em;
`;

const ChipContainer = styled.div`
  position: absolute;
  inset: auto 20px 85px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media only screen and (max-width: ${screenSize["mobile"]}) {
    width: calc(100% - 1.2em);
    inset: auto 0.5em 4.5em 0.5em;
  }
`;

const SingleChip = styled.div`
  background: #ffffff;
  border-radius: 20px;
  display: flex;
  width: fit-content;
  padding: 0px 1em;
  font-size: 1.6rem;
  font-weight: 300;
  margin: 3px;

  @media only screen and (max-width: ${screenSize["mobile"]}) {
    padding: 0px 0.8em;
    font-size: 1.3rem;
  }
`;

const StyledButton = styled.button`
  position: absolute;
  inset: auto 20px 25px 20px;
  display: flex;
  width: calc(100% - 40px);
  justify-content: center;
  font-weight: 500;
  font-size: 1.6rem;
  background: #ff5d73;
  border-radius: 10px;
  border: none;
  color: white;
  @media only screen and (max-width: ${screenSize["mobile"]}) {
    /* inset: auto 10px 10px 10px; */
    bottom: 10px;
    left: 10px;
    width: calc(100% - 20px);
    font-size: 1.4rem;
  }
`;

const ButtonContent = styled.div`
  display: flex;
  height: 40px;
  align-items: center;
`;

const IconContainer = styled.div`
  width: 30px;
  margin-right: 10px;
  @media only screen and (max-width: ${screenSize["mobile"]}) {
    width: 24px;
  }
`;

const DescriptionContainer = styled.div`
  position: absolute;
  inset: 4em 1em auto 1em;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  /* font-size: 0.8em; */
  font-size: 1.8rem;
  line-height: 1.2em;
  color: white;

  @media only screen and (max-width: ${screenSize["mobile"]}) {
    /* inset: auto; */
    height: auto;
    /* font-size: 16px; */
    font-size: 1.6rem;
    line-height: 1.1em;
    font-weight: 300;
    top: 52px;
  }
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: ${screenSize["m-tablet"]}) {
    flex-direction: column;
  }
`;

const PositionImage = styled.div`
  position: absolute;
  margin: auto;
  /* left: 0;
    right: 0; */
  inset: 9rem 0 auto 0;
  @media only screen and (max-width: ${screenSize["m-tablet"]}) {
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    margin-top: 12px;
  }
  @media only screen and (max-width: ${screenSize["tablet"]}) {
    inset: 7rem 0 auto 0;
  }
  @media only screen and (max-width: ${screenSize["mobile"]}) {
    inset: 6rem 0 auto 0;
  }
`;

const ProjectCards = ({ projects = [], screenSize = {} }) => {
  const [activeProject, setActiveProject] = useState(0);
  const [detailVisible, setDetailVisible] = useState(false);

  const projectColors = [
    { bg: "#e4ddec", text: "#6a5e7b" },
    { bg: "#BCD2E3", text: "#6c8faa" },
    { bg: "#FFF2F4", text: "#B88089" },
    { bg: "#D8EDE8", text: "#96C5B9" },
    { bg: "#E6D2E7", text: "#B69CB8" },
  ];

  const renderChips = (tools) =>
    tools.map((item, index) => <SingleChip key={index}>{item}</SingleChip>);

  const handleMouseEnter = (currProject) => {
    setDetailVisible(true);
    setActiveProject(currProject);
  };

  return (
    <CardContainer>
      {projects.map((item, index) => (
        <ProjectCard
          key={index}
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
          <PositionImage>
            <ImageContainer>
              <Image
                src={"/assets/" + item.image}
                layout="fill"
                objectFit="contain"
              />
            </ImageContainer>
          </PositionImage>
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
