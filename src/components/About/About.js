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
      <h1>About</h1>
      <hr />
      <div className={classes.bio}>
        <Div animate={show.itemOne} ref={ref1} className={classes.background}>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
          </p>
        </Div>
        <Div2 animate={show.itemTwo} ref={ref2} className={classes.skills}>
          <h2>Skills: </h2>
          <ul>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>HTML/CSS</li>
            <li>React</li>
            <li>Redux</li>
          </ul>
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
