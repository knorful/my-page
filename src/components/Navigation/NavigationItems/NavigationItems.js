import React from "react";

import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css";

const navigationItems = () => {
  return (
    <ul className={classes.NavItems}>
      <NavigationItem link="/">About</NavigationItem>
      <NavigationItem link="/">Projects</NavigationItem>
      <NavigationItem link="/">Contact</NavigationItem>
    </ul>
  );
};

export default navigationItems;
