import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Banner = () => {
  const onIconClick = (url) => {
    window.open(url);
  };

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
