import React from "react";
import styled from "styled-components";

import SubmissionForm from "../components/Form";

import Image from "next/image";

const socialTypes = [
  { name: "github", link: "https://www.github.com/jdtan" },
  { name: "linkedin", link: "https://www.linkedin.com/in/jaddietan" },
  { name: "mail", link: "mailto:jdtan33@gmail.com" },
];

const Contact = ({ screenSize = {} }) => {
  const PageContainer = styled.div.attrs(() => ({
    id: "contact",
    className: "page",
  }))`
    position: absolute;
    left: 0;
    right: 0;
    height: 100vh;
    /* max-height: calc(100vh - 70px); */
    padding: 0 10vw;
    padding-top: 70px;
    @media only screen and (max-width: ${screenSize["mobile"]}) {
      display: flex;
      flex-direction: column;
      padding: 0 20px;
      padding-top: 70px;
    }
  `;

  const ImageContainer = styled.div`
    position: relative;
    width: 250px;
    height: 250px;
    @media only screen and (max-width: ${screenSize["l-tablet"]}) {
      width: 20em;
      height: 20em;
    }
    @media only screen and (max-width: ${screenSize["m-tablet"]}) {
      width: 16em;
      height: 16em;
    }
    @media only screen and (max-width: ${screenSize["mobile"]}) {
      width: 150px;
      height: 150px;
    }
  `;

  const LayoutContainer = styled.div`
    display: flex;
    height: calc(100vh - 250px);
    @media only screen and (max-width: ${screenSize["l-tablet"]}) {
      flex-direction: column;
    }
    @media only screen and (max-width: ${screenSize["mobile"]}) {
      display: flex;
      flex: 1;
      margin-bottom: 4vw;
    }
  `;

  const ConnectLeft = styled.div`
    width: 40vw;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media only screen and (max-width: ${screenSize["l-tablet"]}) {
      margin: auto;
      margin-top: 3em;
    }
    @media only screen and (max-width: ${screenSize["m-tablet"]}) {
      margin-top: 1em;
    }
    @media only screen and (max-width: ${screenSize["mobile"]}) {
      position: relative;
      height: 0;
      width: 0;
      margin: 14vh auto;
    }
  `;

  const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    @media only screen and (max-width: ${screenSize["m-tablet"]}) {
      margin: 0.5em 0 1.5em 0;
    }
    @media only screen and (max-width: ${screenSize["mobile"]}) {
      width: fit-content;
      position: absolute;
      left: 15vw;
      flex-direction: column;
    }
  `;

  const StyledIcon = styled.a`
    width: 75px;
    height: 75px;
    position: relative;
    margin: 0 10px;

    &:hover,
    :focus {
      box-shadow: 0px 4px 4px rgba(255, 93, 115, 0.3);
      border-radius: 50%;
    }
    &:focus {
      border: #ff5d73 2px solid;
    }
    @media only screen and (max-width: ${screenSize["mobile"]}) {
      margin: 2px 0px;
      width: 55px;
      height: 55px;
    }
  `;

  const PositionImage = styled.div`
    height: auto;
    @media only screen and (max-width: ${screenSize["mobile"]}) {
      position: absolute;
      right: -10vw;
    }
  `;

  const ConnectRight = styled.div`
    display: flex;
    align-items: center;
    @media only screen and (max-width: ${screenSize["l-tablet"]}) {
      flex: 1;
    }
    @media only screen and (max-width: ${screenSize["mobile"]}) {
      display: flex;
      /* justify-content: space-between; */
      flex: 1;
      position: relative;
    }
  `;

  return (
    <PageContainer>
      <div className="sectionTitle">
        Let<span className="accentColor">'</span>s Connect
        <span className="accentColor">:</span>
      </div>
      <LayoutContainer>
        <ConnectLeft>
          <PositionImage>
            <ImageContainer>
              <Image
                src="/assets/envelope-avatar.svg"
                layout="fill"
                objectFit="contain"
              />
            </ImageContainer>
          </PositionImage>
          <IconContainer>
            {socialTypes.map((item, index) => (
              // <a href={item.link} target={"_blank"} key={index}>
              <StyledIcon href={item.link} target={"_blank"} key={index}>
                <Image
                  src={"/assets/social-" + item.name + ".svg"}
                  layout="fill"
                  objectFit="contain"
                />
              </StyledIcon>
              // </a>
            ))}
          </IconContainer>
        </ConnectLeft>
        <ConnectRight>
          <SubmissionForm screenSize={screenSize} />
        </ConnectRight>
      </LayoutContainer>
    </PageContainer>
  );
};

export default Contact;
