import React from "react";
import Head from "next/head";
import Image from "next/image";
import { screenSize } from "./index";

import styled from "styled-components";

const ThanksPage = () => {
  const ImageContainer = styled.div`
    position: relative;
    width: 400px;
    height: 400px;
    margin: auto;
    @media only screen and (max-width: ${screenSize["mobile"]}) {
      width: 70vw;
      height: 70vw;
    }
  `;

  const ContentContainer = styled.div`
    width: 100%;
    height: 90vh;
    margin: auto;
    padding-top: 10vh;
  `;

  const StyledText = styled.div`
    font-size: 4.4rem;
    text-align: center;
    text-transform: uppercase;
    font-weight: 300;
    margin-bottom: 20px;
    @media only screen and (max-width: ${screenSize["mobile"]}) {
      font-size: 3.5rem;
    }
  `;

  return (
    <>
      <Head>
        <title>Jaddie Tan</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <ContentContainer>
        <StyledText>Thanks for Connecting</StyledText>
        <ImageContainer>
          <Image
            src="/assets/thankyou-avatar.svg"
            layout="fill"
            objectFit="contain"
          />
        </ImageContainer>
      </ContentContainer>
    </>
  );
};

export default ThanksPage;
