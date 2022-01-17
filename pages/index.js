import React, { useState, useCallback, useEffect } from "react";
import Head from "next/head";

import NavComponent from "../components/Navigation";
import HomeComponent from "./home";
import AboutMeComponent from "./about";
import SkillSetComponent from "./skills";
import ProjectsComponent from "./projects";
import ContactComponent from "./contact";
import ButtonToTop from "../components/ButtonToTop";

import styled, { css } from "styled-components";

export const screenSize = {
  "s-mobile": "320px",
  mobile: "480px",
  tablet: "768px",
  "m-tablet": "810px",
  "l-tablet": "1024px",
};

const StyledText = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 75vh;
  align-items: center;
  font-family: Montserrat;
  font-size: 2em;
`;

const navButtons = [
  {
    label: "ABOUT ME",
    path: "/about-me",
  },
  {
    label: "PROJECTS",
    path: "/projects",
  },
  {
    label: "CONTACT",
    path: "/contact",
  },
  {
    label: "RESUME",
    path: "/resume",
  },
];

const detectScreenType = (width) => {
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

    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};
const SkipNavigation = styled.a`
  z-index: 310;
  position: absolute;
  transform: translateY(-120%);
  transition: transform 325ms ease-in-out;
  background-color: #ff5d73;
  color: white;
  font-size: 2rem;
  height: 6rem;
  line-height: 2rem;
  border-radius: 0 0 2rem 2rem;
  left: 2rem;
  padding: 2rem 1.5rem 1rem 1.5rem;
  &:active,
  :hover {
    color: rgba(255, 255, 255, 0.5);
  }
  &:focus {
    transform: translateY(0);
    :hover {
      color: white;
    }
  }
`;

const Index = () => {
  const isMobile = detectScreenType(480);
  const isMTablet = detectScreenType(810);
  return (
    <>
      <Head>
        <title>Jaddie Tan</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <SkipNavigation href="#home">Skip Navigation</SkipNavigation>

      <NavComponent screenSize={screenSize} pages={navButtons} />

      <ButtonToTop screenSize={screenSize} isMobile={isMobile} />

      <HomeComponent />
      <AboutMeComponent screenSize={screenSize} />
      <SkillSetComponent
        screenSize={screenSize}
        isMobile={isMobile}
        isMTablet={isMTablet}
      />
      <ProjectsComponent />
      <ContactComponent screenSize={screenSize} />
    </>
  );
};

export default Index;
