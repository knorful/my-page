import React, { useState, useRef, useLayoutEffect } from "react";

import classes from "./About.module.css";
import styled from "styled-components";

const About = () => {
  const [show, doShow] = useState({
    itemOne: false,
    itemTwo: false,
  });
  const ref1 = useRef(null);
  const ref2 = useRef(null);

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
    <div className={classes.About}>
      <div className={classes.bio}>
        <Div style={{ textAlign: "center" }} animate={show.itemOne} ref={ref1}>
          <h1>
            About
            <br />
            Me
          </h1>
          <div className={classes.skills}>
            <h2>Skills</h2>
            <div className={classes.skillIcons}>
              <i class="fab fa-react"></i>
              <i class="fab fa-js-square"></i>
              <i class="fab fa-css3"></i>
              <i class="fab fa-html5"></i>
              <i class="fab fa-git"></i>
              <i class="fab fa-node"></i>
              <i class="fab fa-npm"></i>
            </div>
          </div>
        </Div>
        <Div2 animate={show.itemTwo} ref={ref2} className={classes.background}>
          <p className={classes.introHeading}>MY NAME IS</p>
          <h1 className={classes.introName}>KRISTOPHER NORFUL.</h1>
          <p className={classes.introParagraph}>
            I am a Computer Science grad from the University of Arkansas at
            Little Rock with a minor in Digital Graphics. I have 5 months
            working experience as a Software Tester and 9 months working
            experience as a Solutions Developer Intern. During that time I
            gained a working knowledge of JavaScript, HTML5, CSS, SQL, Git.
            <br />
            <br />I am a member of Phi Theta Kappa Honor Society, Golden Key
            Honor Society, and the National Society of Collegiate Scholars -
            Little Rock Chapter.
          </p>
        </Div2>
      </div>
    </div>
  );
};

const Div = styled.div`
  transform: translateX(${({ animate }) => (animate ? "0" : "-100vw")});
  transition: transform 1s;
`;

const Div2 = styled.div`
  transform: translateX(${({ animate }) => (animate ? "0" : "100vw")});
  transition: transform 1s;
`;
export default About;
