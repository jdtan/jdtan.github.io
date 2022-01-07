import React from "react";
import Image from "next/image";

import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/fontawesome-free-solid";

const HomeContainer = styled.div`
  // height: calc(100vh - 70px);
  height: 100vh;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-top: 70px;
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
`;

const Home = () => {
  return (
    <HomeContainer>
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
      <IconContainer>
        <FontAwesomeIcon icon={faAngleDown} color={"#FF5D73"} size={"2x"} />
      </IconContainer>{" "}
    </HomeContainer>
  );
};

export default Home;
