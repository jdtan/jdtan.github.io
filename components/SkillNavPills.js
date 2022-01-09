import React, { useState } from "react";

import "./SkillNavPills.module.css";

import styled from "styled-components";

const NavContainer = styled.div``;

const TypeButton = styled.button``;

const SkillIconContainer = styled.div``;

const SkillNavPills = ({ skills = [] }) => {
  const [currTab, setCurrTab] = useState({ key: skills[0].key, index: 0 });
  return (
    <>
      <NavContainer>
        {skills.map((item, iter) => (
          <TypeButton
            key={iter}
            onClick={() => setCurrTab({ key: item.key, index: iter })}
            style={{
              backgroundColor: item.key === currTab.key ? "#ff5d73" : "white",
            }}
          >
            {item.label}
          </TypeButton>
        ))}
      </NavContainer>
      <SkillIconContainer>{skills[currTab.index].data}</SkillIconContainer>
    </>
  );
};

export default SkillNavPills;
