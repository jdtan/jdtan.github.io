import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/fontawesome-free-solid";
import styled from "styled-components";

import Icon from "../components/Icons/Icons";

const IconSkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  padding: 25px 50px;
`;

const SvgContainer = styled.div`
  width: 55px;
`;

const IconTitle = styled.div`
  font-weight: 400;
  text-transform: uppercase;
  color: #ff5d73;
  margin-top: 4px;
`;

const IconGrid = styled.div.attrs(() => ({
  id: "skill-div",
}))`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: auto;
  overflow: hidden;
  align-items: flex-start;
`;

const SkillsContainer = styled.div`
  width: 60vw;
  justify-content: center;
  margin: auto;
`;

const ButtonContainer = styled.button`
  width: 100%;
  background: white;
  border: none;
  color: #7c7a7a;
  font-weight: 600;
  font-size: 0.8em;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-top: 10px;
`;

const NavContainer = styled.div`
  padding: 20px 10px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const TypeButton = styled.button`
  border: #ff5d73 2px solid;
  margin-left: -2px;
  width: 300px;
  font-size: 0.9em;
  // font-weight: 500;
  border-radius: ${(props) =>
    props.btnIndex === 0
      ? "12px 0 0 12px"
      : props.btnIndex === 3
      ? "0 12px 12px 0"
      : "0"};
  /* // border-radius: ${(props) =>
    props.btnIndex === 3 ? "0 12px 12px 0" : "0px"} */
  &:hover {
    font-weight: 600 !important;
  }
`;

const tabData = [
  {
    key: "all",
    label: "ALL TOOLS",
    data: [],
  },
  {
    key: "languages",
    label: "LANGUAGES & FRAMEWORKS",
    data: [
      "JavaScript",
      "React",
      "Node.js",
      "HTML",
      "CSS",
      "Python",
      "Java",
      "C++",
    ],
  },
  {
    key: "software",
    label: "SOFTWARE",
    data: ["WebStorm", "VSCode", "MATLAB"],
  },
  {
    key: "tools",
    label: "TOOLS & OPERATING SYSTEMS",
    data: ["Git", "NPM", "Yarn", "Docker", "MongoDB", "Linux", "Ubuntu"],
  },
];

const Skills = () => {
  const [currTab, setCurrTab] = useState({ key: tabData[0].key, index: 0 });
  const [showIcons, setShowIcons] = useState(false);

  return (
    <div id="skill-set" style={{ paddingTop: "70px" }}>
      <div className="sectionTitle">
        Skill Set<span className="accentColor">:</span>
      </div>
      <NavContainer>
        {tabData.map((item, iter) => (
          <TypeButton
            onClick={() => (
              <>
                {setCurrTab({ key: item.key, index: iter })}
                {setShowIcons(false)}{" "}
              </>
            )}
            btnIndex={iter}
            style={{
              backgroundColor: item.key === currTab.key ? "#ff5d73" : "white",
              color: item.key === currTab.key ? "white" : "#ff5d73",
              fontWeight: item.key === currTab.key ? 600 : 500,
            }}
          >
            {item.label}
          </TypeButton>
        ))}
      </NavContainer>
      <SkillsContainer>
        {" "}
        <IconGrid style={{ height: showIcons ? "auto" : "270px" }}>
          {currTab.index === 0
            ? tabData.map((skillObj) =>
                skillObj.data.map((skillData) => (
                  <IconSkillContainer>
                    <SvgContainer>
                      <Icon type={skillData} fill={"#7C7A7A"} />
                    </SvgContainer>
                    <IconTitle>{skillData}</IconTitle>
                  </IconSkillContainer>
                ))
              )
            : tabData[currTab.index].data.map(function (item) {
                return (
                  <IconSkillContainer>
                    <SvgContainer>
                      <Icon type={item} fill={"#7C7A7A"} />
                    </SvgContainer>
                    <IconTitle>{item}</IconTitle>
                  </IconSkillContainer>
                );
              })}
        </IconGrid>
        {currTab.index === 0 && (
          <ButtonContainer onClick={() => setShowIcons(!showIcons)}>
            {!showIcons ? "View All" : null}
            <FontAwesomeIcon
              icon={showIcons ? faAngleUp : faAngleDown}
              color={"#7C7A7A"}
              style={{ margin: "auto" }}
            />
            {showIcons ? "Collapse" : null}
          </ButtonContainer>
        )}
      </SkillsContainer>
    </div>
  );
};

export default Skills;
