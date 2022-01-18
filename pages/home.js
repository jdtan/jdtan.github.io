import React from "react";
import Image from "next/image";
import styled, { keyframes } from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/fontawesome-free-solid";

import screenSize from "../components/ScreenSizes";

const HomeContainer = styled.div`
  height: 100vh;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const HomeContentContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 15vh;
  position: relative;

  @media only screen and (max-width: ${screenSize["tablet"]}) {
    flex-direction: column-reverse;
    margin-top: 5vh;
  }
  @media only screen and (max-width: ${screenSize["s-mobile"]}) {
    margin-top: 0;
  }
`;

const PositionImage = styled.div`
  @media only screen and (max-width: ${screenSize["tablet"]}) {
    position: absolute;
    margin-top: 19em;
    top: 0;
  }
  @media only screen and (max-width: ${screenSize["mobile"]}) {
    margin-top: 11em;
  }
`;

const ImageContainer = styled.div`
  height: 45vh;
  width: 40vw;
  position: relative;
  @media only screen and (max-width: ${screenSize["tablet"]}) {
    height: 24em;
    width: 24em;
  }
  @media only screen and (max-width: ${screenSize["mobile"]}) {
    height: 17em;
    width: 17em;
  }
`;

const WelcomeText = styled.div`
  font-family: Montserrat;
  font-weight: 400;
  font-size: 8rem;
  text-align: right;
  white-space: pre-wrap;
  @media only screen and (max-width: ${screenSize["mobile"]}) {
    font-size: 4.5rem;
  }
`;

const InfoText = styled.div`
  font-weight: 300;
  font-family: Montserrat;
  text-align: right;
  font-size: 3rem;
  @media only screen and (max-width: ${screenSize["tablet"]}) {
    font-size: 2.5rem;
    margin-top: 16em;
  }
  @media only screen and (max-width: ${screenSize["mobile"]}) {
    margin-top: 11em;
  }
`;

const IconContainer = styled.div`
  position: absolute;
  bottom: 10vh;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    border: rgba(255, 93, 115, 0.5) 1px solid;
    box-shadow: 0px 4px 4px rgba(255, 93, 115, 0.5);
  }

  @media (max-width: ${screenSize["mobile"]}) {
    bottom: 5vh;
  }
`;

const bounce = keyframes`
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40%, 60% {
      transform: translateY(-6px);
    }
  `;

const StyledIcon = styled(FontAwesomeIcon)`
  animation: 1.5s ${bounce} ease-out;
`;

const TextContainer = styled.div`
  @media (max-width: ${screenSize["tablet"]}) {
    width: 90%;
  }
`;

const Home = () => {
  const handleDownClick = () => {
    window.location.href = "#about-me";
  };
  return (
    <HomeContainer id="home" className="page">
      <HomeContentContainer>
        <PositionImage>
          <ImageContainer>
            <Image
              src="/assets/waving-avatar3.svg"
              layout="fill"
              objectFit="contain"
            />
          </ImageContainer>
        </PositionImage>
        <TextContainer>
          <WelcomeText>
            HELLO<span className="accentColor">!</span>
            {"\n"}I<span className="accentColor">&rsquo;</span>M JADDIE
          </WelcomeText>
          <InfoText>A Student Web Developer</InfoText>
        </TextContainer>
      </HomeContentContainer>
      <IconContainer onClick={() => handleDownClick()}>
        <StyledIcon icon={faAngleDown} color={"#FF5D73"} size={"2x"} />
      </IconContainer>{" "}
    </HomeContainer>
  );
};

export default Home;
