import React from "react";
import Image from "next/image";

import styled, { keyframes } from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/fontawesome-free-solid";

const HomeContainer = styled.div`
  // height: calc(100vh - 70px);
  height: 100vh;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  /* padding-top: 70px; */
`;

const HomeContentContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 15vh;
`;

const ImageContainer = styled.div`
  height: 45vh;
  width: 40vw;
  position: relative;
`;

const WelcomeText = styled.div`
  font-family: Montserrat;
  font-weight: 400;
  font-size: 80px;
  text-align: right;
  white-space: pre-wrap;
  // margin-top: 25vh;
`;

// const AccentColor = styled.span`
//   color: #ff5d73;
// `;

const InfoText = styled.div`
  font-weight: 300;
  font-family: Montserrat;
  text-align: right;
  font-size: 30px;
`;

// const RightHomeContainer = styled.div`
//   margin-right: 15vw;
//   flex: 1;
// `;

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
    /* filter: drop-shadow(0px 4px 4px rgba(255, 93, 115, 0.3)); */
    border: rgba(255, 93, 115, 0.5) 1px solid;
    box-shadow: 0px 4px 4px rgba(255, 93, 115, 0.5);
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40%, 60% {
    transform: translateY(-6px);
  }
  /* 60% {
    transform: translateY(-4px);
  } */
`;

const StyledIcon = styled(FontAwesomeIcon)`
  /* background-color: red; */
  /* margin: auto; */
  animation: 1.5s ${bounce} ease-out;
  /* width: 100%; */
`;

const Home = () => {
  const handleDownClick = () => {
    window.scrollBy(0, window.innerHeight);
  };
  return (
    <HomeContainer id="home" className="page">
      <HomeContentContainer>
        <ImageContainer>
          <Image
            src="/assets/waving-avatar3.svg"
            layout="fill"
            objectFit="contain"
          />
        </ImageContainer>
        <div>
          <WelcomeText>
            HELLO<span className="accentColor">!</span>
            {"\n"}I<span className="accentColor">'</span>M JADDIE
          </WelcomeText>
          <InfoText>A Student Web Developer</InfoText>
        </div>
      </HomeContentContainer>
      <IconContainer onClick={() => handleDownClick()}>
        <StyledIcon icon={faAngleDown} color={"#FF5D73"} size={"2x"} />
      </IconContainer>{" "}
    </HomeContainer>
  );
};

export default Home;
