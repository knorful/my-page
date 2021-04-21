import React, { useState, useRef, useLayoutEffect } from "react";
import RedditIcon from "@material-ui/icons/Reddit";
import classes from "./Projects.module.css";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Container from "@material-ui/core/Container";

import jammmingImg from "../../assets/jammmingPreview.PNG";
import redditImg from "../../assets/redditPreview.PNG";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    maxWidth: "1000px",
  },
}));

const Projects = () => {
  const styles = useStyles();
  const [openJammming, setOpenJammming] = React.useState(false);
  const [openReddit, setOpenReddit] = React.useState(false);
  const [openPortfolio, setOpenPortfolio] = React.useState(false);
  const [hoverJammming, setHoverJammming] = useState(false);
  const [hoverReddit, setHoverReddit] = useState(false);
  const [hoverPortfolio, setHoverPortfolio] = useState(false);

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

  const handleOpenJammming = () => {
    setOpenJammming(true);
  };

  const handleCloseJammming = () => {
    setOpenJammming(false);
  };

  const handleOpenReddit = () => {
    setOpenReddit(true);
  };

  const handleCloseReddit = () => {
    setOpenReddit(false);
  };

  const handleOpenPortfolio = () => {
    setOpenPortfolio(true);
  };

  const handleClosePortfolio = () => {
    setOpenPortfolio(false);
  };

  return (
    <div id="projects" className={classes.Projects}>
      <Container maxWidth="xl">
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
                <button onClick={handleOpenJammming}>View Project</button>
                <Modal
                  aria-labelledby="jammming project"
                  aria-describedby="jammming-project-description"
                  className={styles.modal}
                  open={openJammming}
                  onClose={handleCloseJammming}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={openJammming}>
                    <div className={styles.paper}>
                      <div
                        className={classes.projectPreview}
                        style={{ display: "flex" }}
                      >
                        <div className={classes.imgContainer}>
                          <img
                            className={classes.projectJammmingImg}
                            src={jammmingImg}
                            alt="jammming project"
                          />
                        </div>
                        <div className={classes.projectDescription}>
                          <h4>Project</h4>
                          <h2>Jammming</h2>
                          <div className={classes.techUsed}>
                            <p>REACT</p>
                            <p>JAVASCRIPT</p>
                            <p>AXIOS</p>
                            <p>HTML & CSS</p>
                            <p>RESPONSIVE</p>
                            <p>SPOTIFY API</p>
                          </div>
                          <div className={classes.projectAbout}>
                            <h4>About</h4>
                            <p>
                              A web application, built with React and Spotify
                              API, that allows users to search the Spotify
                              library, create a custom playlist, modify
                              exisiting playlist, and then save the playlist to
                              their Spotify accounts. (Requires having a Spotify
                              account for playlists to be saved.)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Fade>
                </Modal>
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
                <button onClick={handleOpenReddit}>View Project</button>
                <Modal
                  aria-labelledby="Reddit project"
                  aria-describedby="Reddit-project-description"
                  className={styles.modal}
                  open={openReddit}
                  onClose={handleCloseReddit}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={openReddit}>
                    <div className={styles.paper}>
                      <div
                        className={classes.projectPreview}
                        style={{ display: "flex" }}
                      >
                        <div className={classes.imgContainer}>
                          <img
                            className={classes.projectRedditImg}
                            src={redditImg}
                            alt="reddit minimal project"
                          />
                        </div>
                        <div className={classes.projectDescription}>
                          <h4>Project</h4>
                          <h2>Reddit</h2>
                          <div className={classes.techUsed}>
                            <p>REACT HOOKS</p>
                            <p>REACT ROUTER</p>
                            <p>REDUX</p>
                            <p>MATERIAL UI</p>
                            <p>AXIOS</p>
                            <p>JAVASCRIPT</p>
                            <p>HTML & CSS</p>
                            <p>RESPONSIVE</p>
                            <p>REDDIT API</p>
                          </div>
                          <div className={classes.projectAbout}>
                            <h4>About</h4>
                            <p>
                              Reddit Minimal is an unofficial Reddit frontend
                              app concept, simplified to allow users to browse
                              popular and search, trending, and top Reddit
                              posts.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Fade>
                </Modal>
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
                <button onClick={handleOpenPortfolio}>View Project</button>
                <Modal
                  aria-labelledby="portfolio project"
                  aria-describedby="portfolio-project-description"
                  className={styles.modal}
                  open={openPortfolio}
                  onClose={handleClosePortfolio}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={openPortfolio}>
                    <div className={styles.paper}>
                      <div
                        className={classes.projectPreview}
                        style={{ display: "flex" }}
                      >
                        <div className={classes.projectImg}></div>
                        <div className={classes.projectDescription}>
                          <h4>Project</h4>
                          <h2>Portfolio Website</h2>
                          <div className={classes.techUsed}>
                            <p>REACT</p>
                            <p>JAVASCRIPT</p>
                            <p>HTML & CSS</p>
                          </div>
                          <div className={classes.projectAbout}>
                            <h4>About</h4>
                            <p>
                              My portfolio website to showcase my latest
                              projects. This is a single page application built
                              using React.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Fade>
                </Modal>
              </div>
            ) : null}
          </div>
        </Div1>
      </Container>
    </div>
  );
};

const Div1 = styled.div`
  transform: translateX(${({ animate }) => (animate ? "0" : "100vw")});
  transition: transform 1s 0.6s;
`;

export default Projects;
