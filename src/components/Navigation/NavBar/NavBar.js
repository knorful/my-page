import React from "react";
import classes from "./NavBar.module.css";

import NavItems from "../NavigationItems/NavigationItems";

const navBar = () => {
  return (
    <div className={classes.NavBar}>
      <NavItems />
    </div>
  );
};

export default navBar;
