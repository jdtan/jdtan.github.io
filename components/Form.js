import React from "react";
// import "./Form.css";
import styled from "styled-components";

const StyledButton = styled.button`
  background: #fff4f4;
  border: none;
  width: 100%;
  padding: 10px;
  border-radius: 12px;
  color: #ff5d73;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  box-shadow: 0px 4px 4px rgba(255, 93, 115, 0.15);

  &:hover {
    box-shadow: 0px 4px 4px rgba(255, 93, 115, 0.3);
  }
`;

const StyledForm = styled.form`
  width: 500px;
`;

const FormRow = styled.div`
  margin: 20px 0;
`;

const NameContainer = styled.div`
  width: 48%;
`;

const StyledLabel = styled.label`
  font-variant: small-caps;
  color: #494949;
  letter-spacing: 0.05em;
  margin-bottom: 4px;
`;

const ContactForm = () => {
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
      <FormRow>
        <StyledLabel htmlFor="message">message</StyledLabel>
        <textarea
          name="message"
          cols="30"
          rows="10"
          style={{ width: "100%" }}
        ></textarea>
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
