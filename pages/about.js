import React from "react";
import Image from "next/image";

import styled from "styled-components";
import screenSize from "../components/ScreenSizes";

const AboutPage = styled.div`
  min-height: 100vh;
  height: auto;
  padding-top: 70px;
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  height: 35em;
  width: 35em;
  position: relative;

  @media only screen and (max-width: ${screenSize["l-tablet"]}) {
    height: 25em;
    width: 28em;
  }
  @media only screen and (max-width: ${screenSize["m-tablet"]}) {
    height: 21em;
  }
  @media only screen and (max-width: ${screenSize["tablet"]}) {
    width: 23em;
    height: 23em;
  }
  @media only screen and (max-width: ${screenSize["mobile"]}) {
    height: 200px;
    width: 200px;
  }
`;

const AboutMeText = styled.div`
  background-color: #ffecee;
  border-radius: 12px;
  width: 35vw;
  min-height: 65vh;
  padding: 3.5em;
  line-height: 1.5em;
  font-size: 1.8rem;
  margin-left: 3em;

  flex-direction: column;
  white-space: pre-wrap;
  @media only screen and (max-width: ${screenSize["l-tablet"]}) {
    position: relative;
    min-height: 60vh;
    margin-top: -9em;
    margin-left: 0;
    width: 41em;
    padding: 10em 5em 5em 5em;
  }
  @media only screen and (max-width: ${screenSize["m-tablet"]}) {
    margin-top: -6em;
    height: auto;
    padding-top: 8em;
    width: 34em;
  }
  @media only screen and (max-width: ${screenSize["tablet"]}) {
    width: 32em;
  }
  @media only screen and (max-width: ${screenSize["mobile"]}) {
    margin-top: 7em;
    width: 100%;
    font-size: 1.6rem;
    padding: 8em 2em 3em 2em;
    align-items: center;
    display: flex;
  }
`;

const StartingText = styled.div`
  color: #ff5d73;
  text-align: left;
  width: 100%;
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 1em;
`;

const ContentContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5vh;
  @media only screen and (max-width: ${screenSize["l-tablet"]}) {
    padding: 2em;
    flex-direction: column;
    position: relative;
  }
  @media only screen and (max-width: ${screenSize["mobile"]}) {
    flex: 1;
    padding: 0;
  }
`;

const PositionImage = styled.div`
  @media only screen and (max-width: ${screenSize["l-tablet"]}) {
    z-index: 10;
    margin: 0 2em 0 auto;
  }
  @media only screen and (max-width: ${screenSize["tablet"]}) {
    margin-left: auto;
    margin-right: 5em;
  }
  @media only screen and (max-width: ${screenSize["mobile"]}) {
    position: absolute;
    top: 2vh;
  }
`;

const IntroText = "Hello, my name is Jaddie!";

const AboutText =
  "Welcome to my corner of the internet! I am in a Dual-Degree Computer Science programme and am pursuing a Bachelor of Science and a Bachelor of Engineering  at Simon Raser University and Zhejiang University respectively." +
  "\n\nEven though I am near the end of my programme, I will always consider myself a student as there is no end to learning and I am always ready to discover new opportunities." +
  "\n\nMy objective is to make the web more user-friendly since it is a fantastic place to acquire new skills and interests and it is something I want everyone to be able to access." +
  "\n\nMy current passions are responsive web design and data science.";

const AboutMe = () => {
  return (
    <AboutPage id="about-me" className="page">
      <div className="sectionTitle">
        About Me<span className="accentColor">:</span>
      </div>
      <ContentContainer>
        <PositionImage>
          <ImageContainer>
            <Image
              src="/assets/aboutme-pic2.png"
              layout="fill"
              objectFit="contain"
            />
          </ImageContainer>
        </PositionImage>
        <AboutMeText>
          <StartingText>{IntroText}</StartingText>
          {AboutText}
        </AboutMeText>
      </ContentContainer>
    </AboutPage>
  );
};

export default AboutMe;
