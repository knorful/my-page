import React, { useState, useRef, useLayoutEffect } from "react";
import classes from "./About.module.css";
import styled from "styled-components";
import me from "../../assets/me.JPG";

const About = () => {
  const [show, doShow] = useState({
    itemOne: false,
    itemTwo: false,
    itemThree: false,
  });
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  useLayoutEffect(() => {
    const topPosition = (element) => element.getBoundingClientRect().top;

    const div1Pos = topPosition(ref3.current);

    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      if (div1Pos < scrollPosition) {
        doShow((state) => ({
          ...state,
          itemOne: true,
          itemTwo: true,
          itemThree: true,
        }));
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div id="about" className={classes.About}>
      <div className={classes.bio}>
        <h1>About Me</h1>
        <div className={classes.bioContainer}>
          <Div
            style={{ textAlign: "center" }}
            animate={show.itemOne}
            ref={ref1}
          >
            <div className={classes.skills}>
              <h2>Skills</h2>
              <div className={classes.skillIcons}>
                <i className="fab fa-react"></i>
                <i className="fab fa-js-square"></i>
                <i className="fab fa-css3"></i>
                <i className="fab fa-html5"></i>
                <i className="fab fa-git"></i>
                <i className="fab fa-node"></i>
                <i className="fab fa-npm"></i>
              </div>
            </div>
          </Div>
          <Div2 animate={show.itemTwo} ref={ref2}>
            <div className={classes.ImgContainer}>
              <img src={me} alt="me standing in front of tree" />
            </div>
          </Div2>
          <Div3
            animate={show.itemThree}
            ref={ref3}
            className={classes.background}
          >
            <div className={classes.backgroundContainer}>
              <p className={classes.introHeading}>MY NAME IS</p>
              <h1 className={classes.introName}>KRISTOPHER NORFUL</h1>
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
            </div>
          </Div3>
        </div>
      </div>
    </div>
  );
};

const Div = styled.div`
  transform: translateX(${({ animate }) => (animate ? "0" : "-100vw")});
  transition: transform 1s 1s;

  @media (max-width: 361px) {
    width: 100%;
  }
`;

const Div2 = styled.div`
  transform: translateY(${({ animate }) => (animate ? "0" : "100vh")});
  transition: transform 1s 0.4s;
`;

const Div3 = styled.div`
  transform: translateX(${({ animate }) => (animate ? "0" : "100vw")});
  transition: transform 1s 1s;
`;
export default About;
