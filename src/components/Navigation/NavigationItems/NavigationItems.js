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
    </div>
  );
};

export default navigationItems;
