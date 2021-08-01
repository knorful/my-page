import React from "react";

import classes from "./Footer.module.css";

const footer = () => {
  return (
    <footer className={classes.Footer}>
      <p>&#169; KRISTOPER NORFUL 2021</p>
      <div className={classes.Links}>
        <a
          title="Follow me on Twiiter!"
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/k_Norful"
        >
          <i className="fab fa-twitter"></i>
        </a>
        <a
          title="Connect with me on LinkedIn!"
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/kristopher-norful/"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          title="Check out my repos!"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/knorful"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
    </footer>
  );
};

export default footer;
