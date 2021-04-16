import React, { useState, useRef, useLayoutEffect } from "react";

import classes from "./Projects.module.css";
import styled, { keyframes } from "styled-components";

const Projects = () => {
  const [show, doShow] = useState({
    itemOne: false,
  });
  const ref1 = useRef(null);

  useLayoutEffect(() => {
    const topPosition = (element) => element.getBoundingClientRect().top;

    const div1Pos = topPosition(ref1.current);

    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      if (div1Pos < scrollPosition) {
        doShow((state) => ({ ...state, itemOne: true, itemTwo: true }));
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div id="projects" className={classes.Projects}>
      <h1>Projects</h1>
      <Div1 ref={ref1} animate={show.itemOne} className={classes.container}>
        <div className={classes.box}>
          <p>Project 1</p>
        </div>
        <div className={classes.box}>
          <p>Project 2</p>
        </div>
        <div className={classes.box}>
          <p>Project 3</p>
        </div>
      </Div1>
    </div>
  );
};

const opacity = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Div1 = styled.div`
  transform: translateX(${({ animate }) => (animate ? "0" : "100vw")});
  transition: transform 1s 0.6s;
`;

export default Projects;
