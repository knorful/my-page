import React from "react";
import classes from "./Landing.module.css";
import keyboardImg from "../../assets/keyboard.jpg";

const landing = () => {
  return (
    <div className={classes.Landing}>
      <div className={classes.intro}>
        <div className={classes.greeting}>
          <h1>Hello,</h1>
          <h3>
            I'm <span>Kris</span>, it's a pleasure to meet you. Please take a
            look around!
          </h3>
          <div>
            <button>
              About Me <i className="fas fa-chevron-right"></i>
            </button>
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
