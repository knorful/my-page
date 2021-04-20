import React, { useLayoutEffect, useRef, useState } from "react";
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
          <h3>
            <a href="/">KRISTOPHER NORFUL</a>
          </h3>
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
