import React from "react";
import styled from "styled-components";

import SubmissionForm from "../components/Form";

import Image from "next/image";

const PageContainer = styled.div.attrs(() => ({
  id: "contact",
  className: "page",
}))`
  position: absolute;
  left: 0;
  right: 0;
  padding: 0 10vw;
  padding-top: 70px;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
`;

const LayoutContainer = styled.div`
  display: flex;
  height: calc(100vh - 250px);
`;

const ConnectLeft = styled.div`
  width: 40vw;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const StyledIcon = styled.div`
  width: 75px;
  height: 75px;
  position: relative;
  margin: 0 10px;

  &:hover {
    box-shadow: 0px 4px 4px rgba(255, 93, 115, 0.3);
    border-radius: 50%;
  }
`;

const ConnectRight = styled.div`
  display: flex;
  align-items: center;
`;

const socialTypes = [
  { name: "github", link: "https://www.github.com/jdtan" },
  { name: "linkedin", link: "https://www.linkedin.com/in/jaddietan" },
  { name: "mail", link: "mailto:jdtan33@gmail.com" },
];

const Contact = () => {
  return (
    <PageContainer id="contact" className="page" style={{ height: "100vh" }}>
      <div className="sectionTitle">
        Let<span className="accentColor">'</span>s Connect
        <span className="accentColor">:</span>
      </div>
      <LayoutContainer>
        <ConnectLeft>
          <ImageContainer>
            <Image
              src="/assets/envelope-avatar.svg"
              layout="fill"
              objectFit="contain"
            />
          </ImageContainer>
          <IconContainer>
            {socialTypes.map((item, index) => (
              <a href={item.link} target={"_blank"} key={index}>
                <StyledIcon>
                  <Image
                    src={"/assets/social-" + item.name + ".svg"}
                    layout="fill"
                    objectFit="contain"
                  />
                </StyledIcon>
              </a>
            ))}
          </IconContainer>
        </ConnectLeft>
        <ConnectRight>
          <SubmissionForm />
        </ConnectRight>
      </LayoutContainer>
    </PageContainer>
  );
};

export default Contact;
