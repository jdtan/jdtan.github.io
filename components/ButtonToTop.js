import { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/fontawesome-free-solid";

import styled from "styled-components";

const BacktoTopButton = styled.button`
  position: fixed;
  height: 70px;
  width: 70px;
  bottom: 30px;
  right: 30px;
  background: #ff9cac;
  cursor: pointer;
  border-radius: 50%;
  border: none;
  box-shadow: 0 5px 10px #ccc;
  padding: 10px;
  font-size: initial;
  z-index: 200;

  &:hover {
    background: #ff5d73;
  }
`;

const TopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const handleClick = (e) => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <>
      {showButton && (
        <BacktoTopButton onClick={() => handleClick()}>
          <FontAwesomeIcon icon={faAngleUp} color={"white"} size={"3x"} />
        </BacktoTopButton>
      )}
    </>
  );
};

export default TopButton;
