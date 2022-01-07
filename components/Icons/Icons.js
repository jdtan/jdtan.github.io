import React from "react";

import Cplusplus from "./Cplusplus";
import Css from "./Css";
import Docker from "./Docker";
import Git from "./Git";
import Github from "./Github";
import Html from "./Html";
import Java from "./Java";
import Javascript from "./Javascript";
import Linux from "./Linux";
import Matlab from "./Matlab";
import Mongodb from "./Mongodb";
import Nodejs from "./Nodejs";
import Npm from "./Npm";
import Python from "./Python";
import ReactIcon from "./React";
import Ubuntu from "./Ubuntu";
import Vscode from "./Vscode";
import Webstorm from "./Webstorm";
import Yarn from "./Yarn";

const TypesOfIcons = {
  "C++": Cplusplus,
  CSS: Css,
  Docker: Docker,
  Git: Git,
  Github: Github,
  HTML: Html,
  Java: Java,
  JavaScript: Javascript,
  Linux: Linux,
  MATLAB: Matlab,
  MongoDB: Mongodb,
  "Node.js": Nodejs,
  NPM: Npm,
  Python: Python,
  React: ReactIcon,
  Ubuntu: Ubuntu,
  VSCode: Vscode,
  WebStorm: Webstorm,
  Yarn: Yarn,
};

const Icon = (props) => {
  if (!TypesOfIcons[props.type]) return null;
  return React.createElement(TypesOfIcons[props.type], {
    ...props,
  });
};

Icon.displayName = "Icon";

export default Icon;
