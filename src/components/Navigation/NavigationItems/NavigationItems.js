import React from "react";

import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css";

const navigationItems = () => {
  return (
    <div className={classes.NavItems}>
      <div className={classes.Logo}>
        <h2>
          <a href="/">KRISTOPHER NORFUL</a>
        </h2>
      </div>
      <ul>
        <NavigationItem link="/">About</NavigationItem>
        <NavigationItem link="/">Projects</NavigationItem>
        <NavigationItem link="/">Contact</NavigationItem>
      </ul>
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
    </div>
  );
};

export default navigationItems;
