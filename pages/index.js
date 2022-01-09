import Head from "next/head";

import HomeComponent from "./home";
import AboutMeComponent from "./about";
import SkillSetComponent from "./skills";
import ProjectsComponent from "./projects";
import ContactComponent from "./contact";
import ButtonToTop from "../components/ButtonToTop";

import styled from "styled-components";

const StyledText = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 75vh;
  align-items: center;
  font-family: Montserrat;
  font-size: 2em;
`;

const NavBarContainer = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  height: 70px;
  align-items: center;
  padding-right: 15px;
  background-color: white;
  top: 0;
  left: 0;
  z-index: 100;
`;

const NavButonContainer = styled.a`
  font-family: Montserrat;
  font-weight: 500;
  font-size: 24px;
  padding: 0 15px;
  color: #000000;
  text-decoration: none;

  &:hover {
    color: #ff5d73;
  }
`;

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Jaddie Tan</title>
//         <link rel="icon" href="/assets/logo13.ico" />
//       </Head>
//       <StyledText>COMING SOON</StyledText>
//     </>
//   );
// }

const navButtons = [
  {
    label: "ABOUT ME",
    path: "/about-me",
  },
  {
    label: "PROJECTS",
    path: "/projects",
  },
  {
    label: "CONTACT",
    path: "/contact",
  },
  {
    label: "RESUME",
    path: "/resume",
  },
];

const Index = () => {
  return (
    <>
      <Head>
        <title>Jaddie Tan</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>

      <NavBarContainer>
        <NavButonContainer href={"#about-me"}>
          {navButtons[0].label}
        </NavButonContainer>
        <NavButonContainer href={"#projects"}>
          {navButtons[1].label}
        </NavButonContainer>
        <NavButonContainer href={"#contact"}>
          {navButtons[2].label}
        </NavButonContainer>
        <NavButonContainer href={"/Resume010822.pdf"} target={"_blank"}>
          {navButtons[3].label}
        </NavButonContainer>
      </NavBarContainer>

      <ButtonToTop />

      <HomeComponent />
      <AboutMeComponent />
      <SkillSetComponent />
      <ProjectsComponent />
      <ContactComponent />
    </>
  );
};

export default Index;
