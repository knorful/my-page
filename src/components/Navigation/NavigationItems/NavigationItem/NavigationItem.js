import React from "react";
import classes from "./NavigationItem.module.css";

const navigationItem = (props) => {
  return (
    <li className={classes.NavItem}>
      <a href={props.link}>{props.children}</a>
    </li>
  );
};

export default navigationItem;
