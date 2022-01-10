import React, { useState, useEffect } from "react";

import styled, { css } from "styled-components";

const Navigation = ({ screenSize = {}, pages = [] }) => {
  const [hamActive, setHamActive] = useState(false);
  let hamburgerRef;

  useEffect(() => {
    hamburgerRef = document.getElementsByClassName("ham-menu")[0];
    console.log("in use effect");
  }, []);

  const handleHamburgerClick = () => {
    setHamActive(!hamActive);
  };

  const NavBarMenu = styled.div.attrs(() => ({
    className: "nav-menu",
  }))`
    position: fixed;
    right: 0;
    margin-right: 20px;

    @media (max-width: ${screenSize["tablet"]}) {
      display: ${!hamActive && "none"};
      ${(hamActive) =>
        hamActive &&
        css`
          position: fixed;
          background-color: #ff5d73;
          inset: 0;
          padding-top: 20vh;
          z-index: 500;
        `}
    }
  `;

  const NavButtonContainer = styled.a.attrs(() => ({
    className: "nav-button",
  }))`
    font-family: Montserrat;
    font-size: 24px;
    padding: 0 15px;
    text-decoration: none;
    background-color: transparent !important;
    letter-spacing: 0.05em;

    &:hover {
      color: #ff5d73;
    }
    @media (max-width: ${screenSize["tablet"]}) {
      ${(hamActive) =>
        hamActive &&
        css`
          display: block;
          text-align: center;
          margin: 20px;
          color: white;
          &:hover {
            color: white;
            font-weight: 500;
          }
        `}
    }
  `;

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

  const HamburgerCSS = css`
    ${HamburgerBar}:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
      background-color: white;
    }
    ${HamburgerBar}:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
      background-color: white;
    }
    ${HamburgerBar}:nth-child(2) {
      opacity: 0;
      background-color: white;
    }
  `;

  const HamburgerMenu = styled.div.attrs(() => ({
    className: "ham-menu",
  }))`
    display: none;
    position: fixed;
    z-index: 600;
    inset: 30px 40px auto auto;
    @media (max-width: ${screenSize["tablet"]}) {
      cursor: pointer;
      display: block;
      ${(props) => props.isActive && HamburgerCSS}
    }
  `;

  return (
    <NavBarContainer>
      <NavBarMenu>
        <NavButtonContainer onClick={() => handleNavClick("#about-me")}>
          {pages[0].label}
        </NavButtonContainer>
        <NavButtonContainer onClick={() => handleNavClick("#projects")}>
          {pages[1].label}
        </NavButtonContainer>
        <NavButtonContainer onClick={() => handleNavClick("#contact")}>
          {pages[2].label}
        </NavButtonContainer>
        <NavButtonContainer onClick={() => handleNavClick("/resume010822.pdf")}>
          {pages[3].label}
        </NavButtonContainer>
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
