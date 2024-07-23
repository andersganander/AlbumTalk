import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink to="/">
            <Navbar.Brand>
            ALBUMTALK
            </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-left">
            <NavLink 
                exact
                className={styles.NavLink}
                activeClassName={styles.Active}
                to="/albums">
              THEALBUMS
            </NavLink>
            <NavLink 
                exact
                className={styles.NavLink}
                activeClassName={styles.Active}
                to="/reviews">
              THEREVIEWS
            </NavLink>
            <NavLink 
                exact
                className={styles.NavLink}
                activeClassName={styles.Active}
                to="/signin">
              SIGNIN
            </NavLink>
            <NavLink 
                exact
                className={styles.NavLink}
                activeClassName={styles.Active}
                to="/signup">
              SIGNUP
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;