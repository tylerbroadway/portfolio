import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaDatabase } from "react-icons/fa";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiNodeDotJs,
  SiPython,
} from "react-icons/si";

const Banner = () => {
  const onIconClick = (url) => {
    window.open(url);
  };

  // const technologies = [
  //   "HTML5",
  //   "CSS3",
  //   "JavaScript",
  //   "TypeScript",
  //   "Node.js",
  //   "Python",
  //   "SQL",
  // ];

  // const icons = [
  //   <SiHtml5 />,
  //   <SiCss3 />,
  //   <SiJavascript />,
  //   <SiTypescript />,
  //   <SiNodeDotJs />,
  //   <SiPython />,
  //   <FaDatabase />,
  // ];

  // const renderTech = () => {
  //   for (let i = 0; i < technologies.length; i++) {
  //     return <h4 style={{ color: "white" }}>{technologies[i]}</h4>;
  //   }
  // };

  return (
    <div className="banner">
      <img src="./avatar.jpg" alt="avatar" className="avatar" />
      <div className="banner-text">
        <h1>Full Stack Software Engineer</h1>
        <hr />
        <p>
          HTML5 | CSS3 | JavaScript | TypeScript | React.js | Node.js | Python |
          SQL
        </p>
        <div className="social">
          <FaLinkedin
            className="icon"
            onClick={() =>
              onIconClick("https://www.linkedin.com/in/tyler-broadway/")
            }
          />
          <FaGithub
            className="icon"
            onClick={() => onIconClick("https://github.com/tylerbroadway")}
          />
          <FaTwitter
            className="icon"
            onClick={() => onIconClick("https://twitter.com/tyler_broadway")}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
