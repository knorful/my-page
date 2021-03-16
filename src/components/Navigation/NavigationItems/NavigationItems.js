import React, { useLayoutEffect, useRef, useState } from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import styled from "styled-components";
import classes from "./NavigationItems.module.css";

const NavigationItems = () => {
  const [show, doShow] = useState({
    itemOne: false,
  });

  const ourRef = useRef(null);

  useLayoutEffect(() => {
    const topPos = (element) => element.getBoundingClientRect().top;
    //added to reduce redundancy
    const div1Pos = topPos(ourRef.current);

    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      if (div1Pos < scrollPos) {
        doShow((state) => ({ ...state, itemOne: true }));
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <Div animate={show.itemOne} ref={ourRef} className={classes.NavItems}>
      <div className={classes.NavItemsContainer}>
        <div className={classes.Logo}>
          <h2>
            <a href="/">KRISTOPHER NORFUL</a>
          </h2>
        </div>
        <ul>
          <NavigationItem link="/">About</NavigationItem>
          <NavigationItem link="/">Projects</NavigationItem>
          <NavigationItem link="/">Contact</NavigationItem>
          <NavigationItem link="/">Resume</NavigationItem>
        </ul>
        <div className={classes.Links}>
          <a title="Follow me on Twiiter!" href="https://twitter.com/k_Norful">
            <i class="fab fa-twitter"></i>
          </a>
          <a
            title="Connect with me on LinkedIn!"
            href="https://www.linkedin.com/in/kristopher-norful/"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a title="Check out my repos!" href="https://github.com/knorful">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
    </Div>
  );
};

const Div = styled.div`
  transform: translateY(${({ animate }) => (animate ? "0" : "-100vh")});
  transition: transform 0.75s;
`;

export default NavigationItems;
