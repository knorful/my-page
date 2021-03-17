import React, { useState, useRef } from "react";
import classes from "./NavBar.module.css";
import styled from "styled-components";
import NavItems from "../NavigationItems/NavigationItems";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();

  const StyledMenu = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #ebb97a;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    height: 100vh;
    text-align: left;
    padding: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;

    @media (max-width: 576px) {
      width: 100%;
    }

    a {
      font-size: 2rem;
      text-transform: uppercase;
      padding: 2rem 0;
      font-weight: bold;
      letter-spacing: 0.5rem;
      color: #0d0c1d;
      text-decoration: none;
      transition: color 0.3s linear;

      @media (max-width: 576px) {
        font-size: 1.5rem;
        text-align: center;
      }

      &:hover {
        opacity: .5;
        transition all .5s;
      }
    }
  `;

  const Menu = ({ open }) => {
    return (
      <StyledMenu open={open}>
        <a href="/">About</a>
        <a href="/">Projects</a>
        <a href="/">Contact</a>
        <a href="/">Resume</a>
      </StyledMenu>
    );
  };

  const StyledBurger = styled.button`
    position: absolute;
    top: 32%;
    left: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 10;

    &:focus {
      outline: none;
    }

    div {
      width: 2rem;
      height: 0.25rem;
      background: ${({ open }) => (open ? "#0D0C1D" : "#EFFFFA")};
      border-radius: 10px;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;

      :first-child {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }

      :nth-child(2) {
        opacity: ${({ open }) => (open ? "0" : "1")};
        transform: ${({ open }) =>
          open ? "translateX(20px)" : "translateX(0)"};
      }

      :nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }

      @media (max-width: 430px) {
        width: 1.5rem;
      }
    }
  `;

  const Burger = ({ open, setOpen }) => {
    return (
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
    );
  };

  return (
    <div className={classes.NavBar}>
      <NavItems />
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </div>
  );
};

export default NavBar;
