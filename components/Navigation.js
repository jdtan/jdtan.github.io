import React, { useState, useEffect } from "react";

import styled, { css } from "styled-components";
import screenSize from "./ScreenSizes";

const NavBarMenu = styled.div.attrs(() => ({
  className: "nav-menu",
}))`
  position: absolute;
  right: 0;
  margin-right: 20px;

  @media only screen and (max-width: ${screenSize["l-tablet"]}) {
    right: auto;
    margin-right: 0;
  }
  @media only screen and (max-width: ${screenSize["tablet"]}) {
    display: ${(props) => !props.isActive && "none"};
    ${(props) =>
      props.isActive &&
      css`
        position: fixed;
        background-color: #ff5d73;
        inset: 0;
        padding-top: 20vh;
        z-index: 500;
        width: 100%;
      `}
  }
`;

const NavButtonContainer = styled.button.attrs(() => ({
  className: "nav-button",
}))`
  font-family: Montserrat;
  font-size: 2.4rem;
  padding: 0 15px;
  text-decoration: none;
  background-color: transparent !important;
  letter-spacing: 0.05em;
  border: none;
  color: black;

  &:hover,
  :focus {
    color: #ff5d73;
  }
  &:focus {
    outline: none;
  }
  @media only screen and (max-width: ${screenSize["tablet"]}) {
    ${(props) =>
      props.isActive &&
      css`
        display: block;
        text-align: center;
        margin: 1em 0;
        color: white;
        width: 100%;
        &:hover {
          color: white;
          font-weight: 500;
        }
      `}
  }
`;

const NavBarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 70px;
  align-items: center;
  padding-right: 15px;
  top: 0;
  left: 0;
  z-index: 300;
  position: fixed;
  width: 100%;
  background-image: linear-gradient(
    to bottom,
    rgb(255, 255, 255),
    80%,
    rgba(255, 255, 255, 0)
  );
  @media only screen and (max-width: ${screenSize["l-tablet"]}) {
    width: 100vw;
  }
`;

const HamburgerBar = styled.span`
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: #ff5d73;
  border-radius: 3px;
`;

const HamburgerMenu = styled.div.attrs(() => ({
  className: "ham-menu",
}))`
  display: none;
  position: fixed;
  z-index: 600;
  transition: all 0.3s ease-in-out;
  inset: 30px 30px auto auto;
  @media only screen and (max-width: ${screenSize["tablet"]}) {
    cursor: pointer;
    display: block;
    ${(props) =>
      props.isActive &&
      css`
        transition: all 0.3s ease-in-out;
        span:nth-child(1) {
          background-color: white;
          transform: translateY(8px) rotate(45deg);
        }
        span:nth-child(3) {
          background-color: white;
          transform: translateY(-8px) rotate(-45deg);
        }
        span:nth-child(2) {
          background-color: white;
          opacity: 0;
        }
      `}
  }
`;

const Navigation = ({ pages = [] }) => {
  const [hamActive, setHamActive] = useState(false);
  let hamburgerRef;

  useEffect(() => {
    hamburgerRef = document.getElementsByClassName("ham-menu")[0];
  }, []);

  const handleNavClick = (newLocation) => {
    if (newLocation[0] === "#") {
      window.location.href = newLocation;
    } else {
      window.open(newLocation, "_blank");
    }
    if (hamActive) {
      setHamActive(false);
    }
  };
  const handleHamburgerClick = () => {
    setHamActive(!hamActive);
  };

  return (
    <NavBarContainer>
      <NavBarMenu isActive={hamActive}>
        <NavButtonContainer
          onClick={() => handleNavClick("#about-me")}
          isActive={hamActive}
        >
          {pages[0].label}
        </NavButtonContainer>
        <NavButtonContainer
          onClick={() => handleNavClick("#projects")}
          isActive={hamActive}
        >
          {pages[1].label}
        </NavButtonContainer>
        <NavButtonContainer
          onClick={() => handleNavClick("#contact")}
          isActive={hamActive}
        >
          {pages[2].label}
        </NavButtonContainer>
        {/*
          <NavButtonContainer onClick={() => handleNavClick("/resume010822.pdf")}>
            {pages[3].label}
          </NavButtonContainer>
        
        */}
      </NavBarMenu>
      <HamburgerMenu onClick={handleHamburgerClick} isActive={hamActive}>
        <HamburgerBar></HamburgerBar>
        <HamburgerBar></HamburgerBar>
        <HamburgerBar></HamburgerBar>
      </HamburgerMenu>
    </NavBarContainer>
  );
};

export default Navigation;
