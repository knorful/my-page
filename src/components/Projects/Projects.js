import React, { useState, useRef, useLayoutEffect } from "react";
import RedditIcon from "@material-ui/icons/Reddit";
import classes from "./Projects.module.css";
import styled from "styled-components";

const Projects = () => {
  const [show, doShow] = useState({
    itemOne: false,
  });
  const [hoverJammming, setHoverJammming] = useState(false);
  const [hoverReddit, setHoverReddit] = useState(false);
  const [hoverPortfolio, setHoverPortfolio] = useState(false);

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
        <div
          className={classes.jammingBox}
          onMouseEnter={() => setHoverJammming(true)}
          onMouseLeave={() => setHoverJammming(false)}
        >
          <p>Jammming</p>
          {hoverJammming ? (
            <div>
              <button>View Project</button>
            </div>
          ) : null}
        </div>

        <div
          className={classes.redditBox}
          onMouseEnter={() => setHoverReddit(true)}
          onMouseLeave={() => setHoverReddit(false)}
        >
          <RedditIcon className={classes.redditLogo} />
          <h2>
            Reddit <span>Minimal</span>
          </h2>
          {hoverReddit ? (
            <div>
              <button>View Project</button>
            </div>
          ) : null}
        </div>
        <div
          className={classes.portfolioBox}
          onMouseEnter={() => setHoverPortfolio(true)}
          onMouseLeave={() => setHoverPortfolio(false)}
        >
          <p>Portfolio</p>
          {hoverPortfolio ? (
            <div>
              <button>View Project</button>
            </div>
          ) : null}
        </div>
      </Div1>
    </div>
  );
};

const Div1 = styled.div`
  transform: translateX(${({ animate }) => (animate ? "0" : "100vw")});
  transition: transform 1s 0.6s;
`;

export default Projects;
