import React, { useState } from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/fontawesome-free-solid";
import { Select } from "antd";

const { Option } = Select;

import Icon from "../components/Icons/Icons";
import screenSize from "../components/ScreenSizes";

const IconSkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  padding: 25px 50px;

  @media only screen and (max-width: ${screenSize["mobile"]}) {
    width: 100px;
    padding: 25px;
  }
`;

const SvgContainer = styled.div`
  width: 45px;
  @media only screen and (max-width: ${screenSize["m-tablet"]}) {
    width: 38px;
  }
  @media only screen and (max-width: ${screenSize["mobile"]}) {
    width: 30px;
  }
`;

const IconTitle = styled.div`
  font-weight: 400;
  text-transform: uppercase;
  color: #ff5d73;
  margin-top: 6px;
  font-size: 1.8rem;
  @media only screen and (max-width: ${screenSize["mobile"]}) {
    font-size: 1.6rem;
  }
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
  height: ${(props) => (props.fullheight ? "auto" : "270px")};

  @media only screen and (max-width: ${screenSize["m-tablet"]}) {
    height: ${(props) =>
      props.isAll ? (props.fullheight ? "auto" : "245px") : "auto"};
  }
  @media only screen and (max-width: ${screenSize["mobile"]}) {
    height: ${(props) =>
      props.isAll ? (props.fullheight ? "auto" : "335px") : "auto"};
  }
`;

const SkillsContainer = styled.div`
  width: 60vw;
  justify-content: center;
  margin: auto;
  max-width: 90vw;
  @media only screen and (max-width: ${screenSize["l-tablet"]}) {
    width: 58em;
  }
  @media only screen and (max-width: ${screenSize["m-tablet"]}) {
    width: 47em;
  }
  @media only screen and (max-width: ${screenSize["mobile"]}) {
    width: 100%;
  }
`;

const ButtonContainer = styled.button`
  /* width: 100%; */
  background: white;
  border: none;
  color: #7c7a7a;
  font-weight: 600;
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: auto;
  margin-top: 10px;
`;

const NavContainer = styled.div`
  padding: 20px 10px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const TypeButton = styled.button`
  border: #ff5d73 1px solid;
  padding: 0.5em 1.5em;
  margin-left: -1px;
  width: 300px;
  font-size: 1.8rem;
  border-radius: ${(props) =>
    props.btnIndex === 0
      ? "12px 0 0 12px"
      : props.btnIndex === 3
      ? "0 12px 12px 0"
      : "0"};
  &:hover {
    font-weight: 600 !important;
    /* background-color: rgba(255, 93, 115, 0.5) !important;
      color: white !important; */
    /* border-width: 2px; */
  }
  &:focus {
    outline-offset: 2px;
    z-index: 5;
  }
`;

const StyledSelect = styled(Select)`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 10px;

  @media only screen and (max-width: ${screenSize["m-tablet"]}) {
    max-width: 90%;
    width: 65vw;
    margin: 20px auto 10px auto;
    display: flex;
  }
  @media only screen and (max-width: ${screenSize["mobile"]}) {
    max-width: 100%;
    width: 100%;
    margin: 20px 0 10px 0;
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

const Skills = ({ isMobile, isMTablet }) => {
  const [showIcons, setShowIcons] = useState(false);
  const [currTab, setCurrTab] = useState({ key: tabData[0].key, index: 0 });

  function handleChange(value) {
    let pos = 0;
    switch (value) {
      case tabData[0].key:
        pos = 0;
        break;
      case tabData[1].key:
        pos = 1;
        break;
      case tabData[2].key:
        pos = 2;
        break;
      case tabData[3].key:
        pos = 3;
        break;
    }
    setCurrTab({ key: value, index: pos });
    setShowIcons(false);
  }
  return (
    <div id="page skill-set" style={{ marginTop: "4em" }}>
      <div className="sectionTitle">
        Skill Set<span className="accentColor">:</span>
      </div>
      {isMTablet ? (
        <StyledSelect
          defaultValue="all"
          onChange={(value, key) => handleChange(value, key)}
          value={currTab}
        >
          {tabData.map((item, iter) => (
            <Option value={item.key} key={iter}>
              {item.label}
            </Option>
          ))}
        </StyledSelect>
      ) : (
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
              key={iter}
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
      )}

      <SkillsContainer>
        {" "}
        <IconGrid fullheight={showIcons} isAll={currTab.index === 0}>
          {currTab.index === 0
            ? tabData.map((skillObj, parentIndex) =>
                skillObj.data.map((skillData, index) => (
                  <IconSkillContainer key={parentIndex + "" + index}>
                    <SvgContainer>
                      <Icon type={skillData} fill={"#7C7A7A"} />
                    </SvgContainer>
                    <IconTitle>{skillData}</IconTitle>
                  </IconSkillContainer>
                ))
              )
            : tabData[currTab.index].data.map(function (item, index) {
                return (
                  <IconSkillContainer key={index}>
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
