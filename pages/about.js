import React from "react";
import Image from "next/image";

import styled from "styled-components";

const tempText =
  '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ';

const AboutMe = ({ screenSize = {} }) => {
  const AboutPage = styled.div`
    height: 100vh;
    padding-top: 70px;
    display: flex;
    flex-direction: column;
  `;

  const ImageContainer = styled.div`
    height: 60vh;
    width: 40vw;
    position: relative;
    @media (max-width: ${screenSize["mobile"]}) {
      height: 200px;
      width: 200px;
      z-index: 10;
    }
  `;

  const AboutMeText = styled.div`
    background-color: #ffecee;
    border-radius: 12px;
    width: 35vw;
    height: 70vh;
    padding: 50px;
    padding-top: 50px;
    // font-size: 26px;
    line-height: 1.5em;
    padding-top: 15vh;
    @media (max-width: ${screenSize["mobile"]}) {
      width: 100%;
      position: absolute;
      inset: 120px auto 25px auto;
      height: auto;
      font-size: 16px;
      padding: 30px;
      align-items: center;
      display: flex;
    }
  `;

  const ContentContainer = styled.div`
    display: flex;
    // flex: 1;
    align-items: center;
    justify-content: space-between;
    padding-top: 5vh;
    @media (max-width: ${screenSize["mobile"]}) {
      position: relative;
      /* background-color: red; */
      flex: 1;
    }
  `;

  const PositionImage = styled.div`
    @media (max-width: ${screenSize["mobile"]}) {
      position: absolute;
      top: 2vh;
    }
  `;
  return (
    <AboutPage id="about-me" className="page">
      <div className="sectionTitle">
        About Me<span className="accentColor">:</span>
      </div>
      <ContentContainer>
        <PositionImage>
          <ImageContainer>
            <Image
              src="/assets/aboutme-pic.png"
              layout="fill"
              objectFit="contain"
            />
          </ImageContainer>
        </PositionImage>
        <AboutMeText>{tempText}</AboutMeText>
      </ContentContainer>
    </AboutPage>
  );
};

export default AboutMe;
