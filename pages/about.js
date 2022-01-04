import React from "react";
import Image from "next/image";

import styled from "styled-components";

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
`;

const AccentColor = styled.span`
  color: #ff5d73;
`;

const AboutMeText = styled.div`
  background-color: #ffecee;
  border-radius: 12px;
  width: 35vw;
  height: 70vh;
  padding: 50px;
  padding-top: 50px;
  font-size: 26px;
  line-height: 1.5em;
  padding-top: 15vh;
`;

const ContentContainer = styled.div`
  display: flex;
  // flex: 1;
  align-items: center;
  justify-content: space-between;
  padding-top: 5vh;
`;

const tempText =
  '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ';

const AboutMe = () => {
  return (
    <AboutPage id="about-me">
      {/* the about me page that doesnt work{" "} */}
      <div className="sectionTitle">
        About Me<AccentColor>:</AccentColor>
      </div>
      <ContentContainer>
        <ImageContainer>
          <Image
            src="/assets/picwithbg_PNG4.png"
            layout="fill"
            objectFit="contain"
          />
        </ImageContainer>
        <AboutMeText>{tempText}</AboutMeText>
      </ContentContainer>
    </AboutPage>
  );
};

export default AboutMe;
