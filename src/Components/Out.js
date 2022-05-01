import { signOut } from 'firebase/auth';
import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../Firebase/Firebase.init';
import style from "./NavBarHome/NavBarHome.module.css"
const Out = () => {
     const handleSignOut = () => {
       signOut(auth)
         .then(() => {
           // Sign-out successful.
         })
         .catch((error) => {
           // An error happened.
         });
     };
    return (
      <>
        <Link to="/home" onClick={handleSignOut}>
          <h6
            className={`text-white text-decoration-none  ${style.navBar_text}`}
          >
            Logout
          </h6>
        </Link>
      </>
    );
};

export default Out;