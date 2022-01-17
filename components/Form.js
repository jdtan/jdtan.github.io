import React from "react";
// import "./Form.css";
import styled from "styled-components";

const ContactForm = ({ screenSize = {} }) => {
  const StyledButton = styled.button`
    background: #fff4f4;
    border: none;
    width: 100%;
    padding: 0.5em;
    border-radius: 12px;
    color: #ff5d73;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    /* box-shadow: 0px 4px 4px rgba(255, 93, 115, 0.15); */
    font-size: 2rem;
    margin-top: 2rem;

    &:hover {
      box-shadow: 0px 4px 4px rgba(255, 93, 115, 0.3);
    }
    @media only screen and (max-width: ${screenSize["l-tablet"]}) {
      /* margin-top: 2em; */
    }
    @media only screen and (max-width: ${screenSize["m-tablet"]}) {
      margin-top: 1em;
    }
    @media only screen and (max-width: ${screenSize["mobile"]}) {
      bottom: 1em;
      position: absolute;
      font-size: 1.8rem;
    }
    @media only screen and (max-height: 746px) {
      bottom: 0.5em;
    }
  `;

  const StyledForm = styled.form`
    width: 500px;
    @media only screen and (max-width: ${screenSize["l-tablet"]}) {
      width: 45em;
      margin: 0 auto;
    }
    @media only screen and (max-width: ${screenSize["m-tablet"]}) {
      width: 37em;
    }
    @media only screen and (max-width: ${screenSize["mobile"]}) {
      width: auto;
      position: absolute;
      top: 0;
      bottom: 0;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }
  `;

  const FormRow = styled.div`
    margin: 5px 0;
    @media only screen and (max-width: ${screenSize["m-tablet"]}) {
      margin: 0.5em 0;
    }
  `;

  const NameContainer = styled.div`
    width: 48%;
    @media only screen and (max-width: ${screenSize["mobile"]}) {
      width: 49%;
    }
  `;

  const StyledLabel = styled.label`
    font-variant: small-caps;
    color: #494949;
    letter-spacing: 0.05em;
    margin-bottom: 4px;
    font-size: 2rem;
    @media only screen and (max-width: ${screenSize["mobile"]}) {
      margin-bottom: 0;
      /* font-size: 18px; */
      font-size: 1.8rem;
    }
  `;

  const StyledTextArea = styled.textarea`
    width: 100%;
    @media only screen and (max-width: ${screenSize["mobile"]}) {
      /* height: calc(100% - 110px); */
      height: calc(100% - 13rem);
    }
    @media only screen and (max-height: 746px) {
      height: calc(100% - 14em);
    }
  `;
  return (
    <StyledForm
      action="https://app.99inbound.com/api/e/NjYuIoOq"
      method="POST"
      autoComplete="off"
    >
      <FormRow style={{ display: "flex", justifyContent: "space-between" }}>
        <NameContainer>
          <StyledLabel className="required" htmlFor="lname">
            first name
          </StyledLabel>
          <input type="text" name="fname" required />
        </NameContainer>
        <NameContainer>
          <StyledLabel className="required" htmlFor="lname">
            last name
          </StyledLabel>
          <input type="text" name="lname" required />
        </NameContainer>
      </FormRow>
      <FormRow>
        <StyledLabel className="required" htmlFor="email">
          email
        </StyledLabel>
        <input type="email" name="email" required style={{ width: "100%" }} />
      </FormRow>
      <FormRow style={{ display: "flex", flexDirection: "column" }}>
        <StyledLabel htmlFor="message">message</StyledLabel>
        <StyledTextArea name="message" cols="30" rows="10"></StyledTextArea>
      </FormRow>
      <div style={{ position: "absolute", left: "-5000px" }}>
        <input
          type="checkbox"
          name="lovely_chiffon_satin_bobble_head"
          value="1"
          tabIndex="-1"
          autoComplete="no"
        />
      </div>
      <StyledButton>connect!</StyledButton>
    </StyledForm>
  );
};

export default ContactForm;
