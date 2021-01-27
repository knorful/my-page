import React from "react";

import classes from "./Projects.module.css";
import projectPic1 from "../../assets/sample.png";

const projects = () => {
  return (
    <div className={classes.Projects}>
      <h1>Projects</h1>
      <hr />
      <div className={classes.container}>
        <div className={classes.box}>
          <p>Project 1</p>
        </div>
        <div className={classes.box}>
          <p>Project 2</p>
        </div>
        <div className={classes.box}>
          <p>Project 3</p>
        </div>
        <div className={classes.box}>
          <p>Project 4</p>
        </div>
        <div className={classes.box}>
          <p>Project 5</p>
        </div>
        <div className={classes.box}>
          <p>Project 6</p>
        </div>
      </div>
    </div>
  );
};

export default projects;
