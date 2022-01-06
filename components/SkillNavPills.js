import React, { useState } from "react";

import "./SkillNavPills.module.css";

import styled from "styled-components";

const SkillNav = styled.ul.attrs(() => ({
  className: "nav nav-pills mb-3",
  id: "pills-tab",
  role: "tablist",
}))`
  color: #ff5d73 !important;
`;

const NavItem = styled.li.attrs((props) => ({
  className: "nav-item",
  role: "presentation",
}))``;

const NavButton = styled.button.attrs(() => ({
  ["data-bs-toggle"]: "pill",
  type: "button",
  role: "tab",
}))`
  background-color: ${(props) =>
    props ? console.log("props", props) : "white"};
  .active {
    background-color: red !important;
  }
`;

const NavContentContainer = styled.div.attrs(() => ({
  className: "tab-content",
  id: "pills-tabContent",
}))``;

const NavContent = styled.div.attrs(() => ({
  role: "tabpanel",
}))``;

const NavContainer = styled.div``;

const TypeButton = styled.button``;

const SkillIconContainer = styled.div``;

const SkillNavPills = ({ skills = [] }) => {
  const [currTab, setCurrTab] = useState({ key: skills[0].key, index: 0 });
  return (
    <>
      {/* <SkillNav>
        {data.map((item, index) => (
          <NavItem>
            <NavButton
              className={`nav-link` + (index === 0 ? ` active` : ``)}
              id={`pills-` + item.key + `-tab`}
              data-bs-target={`#pills-` + item.key}
              aria-controls={`pills-` + item.key}
              aria-selected={index === 0 ? true : false}
            >
              {item.label}
            </NavButton>
          </NavItem>
        ))}
      </SkillNav>
      <NavContentContainer>
        {data.map((item, index) => (
          <NavContent
            className={`tab-pane fade` + (index === 0 ? ` show active` : ``)}
            id={`pills-` + item.key}
            aria-labelledby={`pills-` + item.key + `-tab`}
          >
            CONTENT {item.label}
          </NavContent>
        ))}
      </NavContentContainer> */}
      <NavContainer>
        {skills.map((item, iter) => (
          <TypeButton
            onClick={() => setCurrTab({ key: item.key, index: iter })}
            style={{
              backgroundColor: item.key === currTab.key ? "#ff5d73" : "white",
            }}
          >
            {console.log("curr tab", currTab)}
            {item.label}
          </TypeButton>
        ))}
      </NavContainer>
      <SkillIconContainer>
        {/* {currTab.key} */}
        {skills[currTab.index].data}
      </SkillIconContainer>
    </>
  );
};

export default SkillNavPills;
