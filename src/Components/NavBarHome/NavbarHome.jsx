import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import style from './NavBarHome.module.css'
const NavbarHome = () => {
    return (
      <>
        <Navbar className={style.navBar_bg}>
          <Container>
            <Navbar.Brand href="#home">
              {" "}
              <h3 className="text-white">Education Learning Platform</h3>{" "}
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end ">
              <Navbar.Text>
                <Link
                  to="/login"
                  className={`text-white text-decoration-none ${style.navBar_text}`}
                >
                  <h6 className="d-inline">Login</h6>
                </Link>
                <span className="text-white"> / </span>
                <Link
                  to="/register"
                  className={`text-white text-decoration-none ${style.navBar_text}`}
                >
                  <h6 className="d-inline">Register</h6>
                </Link>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
          <div className="text-white">
            {" "}
            <hr />{" "}
          </div>
        </Navbar>
      </>
    );
};

export default NavbarHome;