import React from "react";
import classes from "./Landing.module.css";
import keyboardImg from "../../assets/keyboard.jpg";

const landing = () => {
  return (
    <div className={classes.Landing}>
      <div className={classes.intro}>
        <div className={classes.greeting}>
          <h2>Hello,</h2>
          <h4>
            I'm <span>Kris</span>, it's a pleasure to meet you. Please take a
            look around!
          </h4>
          <div>
            <a href="#about">
              About Me <i className="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
      <figure className={classes.tint}>
        <img src={keyboardImg} alt="keyboard" />
      </figure>
    </div>
  );
};

export default landing;
