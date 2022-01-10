import React, { useState, useEffect } from "react";
import Head from "next/head";

import NavComponent from "../components/Navigation";
import HomeComponent from "./home";
import AboutMeComponent from "./about";
import SkillSetComponent from "./skills";
import ProjectsComponent from "./projects";
import ContactComponent from "./contact";
import ButtonToTop from "../components/ButtonToTop";

import styled, { css } from "styled-components";

const screenSize = { mobile: "480px", tablet: "768px" };

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

const Index = () => {
  return (
    <>
      <Head>
        <title>Jaddie Tan</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>

      <NavComponent screenSize={screenSize} pages={navButtons} />

      <ButtonToTop />

      <HomeComponent screenSize={screenSize} />
      <AboutMeComponent screenSize={screenSize} />
      <SkillSetComponent screenSize={screenSize} />
      <ProjectsComponent />
      <ContactComponent />
    </>
  );
};

export default Index;
