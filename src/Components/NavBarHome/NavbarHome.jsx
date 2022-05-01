import React from 'react';
import { signOut } from "firebase/auth";
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/Firebase.init';
import style from './NavBarHome.module.css'
import Out from '../Out';
const NavbarHome = () => {
  const [user, loading, error] = useAuthState(auth);

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
            {user ? (
              <Navbar.Text>
               <Out></Out>
              </Navbar.Text>
            ) : (
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
            )}
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