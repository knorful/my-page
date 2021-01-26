import React from "react";

import classes from "./Landing.module.css";
import keyboardImg from "../../assets/keyboard.jpg";
import meImg from "../../assets/me.jpeg";

const landing = () => {
  return (
    <div className={classes.Landing}>
      <div className={classes.intro}>
        <div className={classes.greeting}>
          <h1>Hello,</h1>
          <h3>
            I'm Kris, it's a pleasure to meet you. Please take a look around!
          </h3>
          <button>
            About Me <i class="fas fa-chevron-right"></i>
          </button>
        </div>
        <div className={classes.profilePic}>
          <figure>
            <img src={meImg} alt="Me" />
          </figure>
        </div>
      </div>
      <figure className={classes.tint}>
        <img src={keyboardImg} alt="keyboard" />
      </figure>
    </div>
  );
};

export default landing;
