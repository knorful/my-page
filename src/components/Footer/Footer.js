import React from "react";

import classes from "./Footer.module.css";

const footer = () => {
  return (
    <footer className={classes.Footer}>
      <p>&#169; KRISTOPER NORFUL 2021</p>
      <div className={classes.Links}>
        <a title="Follow me on Twiiter!" href="/">
          <i class="fab fa-twitter"></i>
        </a>
        <a title="Connect with me on Twiiter!" href="/">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a title="Check out my repos!" href="/">
          <i class="fab fa-github"></i>
        </a>
      </div>
    </footer>
  );
};

export default footer;
