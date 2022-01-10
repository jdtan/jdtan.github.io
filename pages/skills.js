import React, { useState, useCallback, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/fontawesome-free-solid";
import styled from "styled-components";
import { Select } from "antd";

import Icon from "../components/Icons/Icons";

const { Option } = Select;

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};

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

const Skills = ({ screenSize = {} }) => {
  const [currTab, setCurrTab] = useState({ key: tabData[0].key, index: 0 });
  const [showIcons, setShowIcons] = useState(false);
  const isMobile = useMediaQuery(480);

  const IconSkillContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    padding: 25px 50px;

    @media (max-width: ${screenSize["mobile"]}) {
      width: 100px;
      padding: 25px;
    }
  `;

  const SvgContainer = styled.div`
    width: 45px;
    @media (max-width: ${screenSize["mobile"]}) {
      width: 30px;
    }
  `;

  const IconTitle = styled.div`
    font-weight: 400;
    text-transform: uppercase;
    color: #ff5d73;
    margin-top: 4px;
    @media (max-width: ${screenSize["mobile"]}) {
      font-size: 16px;
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

    @media (max-width: ${screenSize["mobile"]}) {
      height: ${(props) => (props.fullheight ? "auto" : "335px")};
    }
  `;

  const SkillsContainer = styled.div`
    width: 60vw;
    justify-content: center;
    margin: auto;
    @media (max-width: ${screenSize["mobile"]}) {
      width: 100%;
    }
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
    padding: 5px 10px;
    margin-left: -2px;
    width: 300px;
    font-size: 0.9em;
    border-radius: ${(props) =>
      props.btnIndex === 0
        ? "12px 0 0 12px"
        : props.btnIndex === 3
        ? "0 12px 12px 0"
        : "0"};
    &:hover {
      font-weight: 600 !important;
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
  `;

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
    console.log(currTab);
    setShowIcons(false);
  }
  return (
    <div id="page skill-set" style={{}}>
      <div className="sectionTitle">
        Skill Set<span className="accentColor">:</span>
      </div>
      {isMobile ? (
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
        <IconGrid fullheight={showIcons}>
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
