import React from "react";

import classes from "./Landing.module.css";
import meImg from "../../assets/me.jpeg";
import cyber from "../../assets/cyber.jpg";

const landing = () => {
  return (
    <div className={classes.Landing}>
      <div className={classes.intro}>
        <div className={classes.greeting}>
          <h1>Hello,</h1>
          <h3>
            I'm Kris, it's a pleasure to meet you. Please take a look around!
          </h3>
          <div>
            <button>
              About Me <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
        <div className={classes.profilePic}>
          <figure>
            <img src={meImg} alt="Me" />
          </figure>
        </div>
      </div>
      <figure className={classes.tint}>
        <img src={cyber} alt="keyboard" />
      </figure>
    </div>
  );
};

export default landing;
