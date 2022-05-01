import { render } from "@testing-library/react";
import React, { useState } from "react";
import StudentRegister from "../../Components/RegisterForm/StudentRegister";
import TeacherRegister from "../../Components/RegisterForm/TeacherRegister";
import auth from "../../Firebase/Firebase.init";
import style from "./Register.module.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
const Register = () => {
  
  
    const [isTeacher, setIsTeacher] = useState(false);
  const [isStudent, setIsStudent] = useState(false);
  


  return (
    <div className={style.register_wrap_bg}>
      <div className="text-white text-center">
        <h4>Register Here </h4>
        <br />
        <div
          className={`btn btn-warning text-dark fw-bold ${
            isStudent || isTeacher ? "d-none" : "d-inline"
          }`}
          onClick={() => setIsTeacher(true)}
          id="teacher"
        >
          As a TEACHER
        </div>{" "}
        <br /> <br />
        <div
          className={`btn btn-warning text-dark fw-bold ${
            isStudent || isTeacher ? "d-none" : "d-inline"
          }`}
          onClick={() => setIsStudent(true)}
          id="student"
        >
          As a STUDENT
        </div>
      </div>

      {isTeacher ? (
        <TeacherRegister  />
      ) : (
        <div></div>
      )}
      {isStudent ? (
        <StudentRegister  />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Register;
