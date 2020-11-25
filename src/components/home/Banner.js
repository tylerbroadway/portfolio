import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="banner">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHj9dWR0-p1oTrDkBj6jjaz6ejROWiwmm5bg&usqp=CAU"
        alt="avatar"
        className="avatar"
      />
      <div className="banner-text">
        <h1>Full Stack Software Engineer</h1>
        <hr />
        <p>
          HTML5 | CSS3 | JavaScript | TypeScript | React.js | Node.js | Python |
          SQL
        </p>
        <div className="social">
          <FaLinkedin className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
