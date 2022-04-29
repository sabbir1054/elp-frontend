import React, { useState } from "react";
import StudentRegister from "../../Components/RegisterForm/StudentRegister";
import TeacherRegister from "../../Components/RegisterForm/TeacherRegister";
import style from "./Register.module.css";
const Register = () => {
    const isTeacher = useState(false);
    const isStudent = useState(false);
  return (
    <div className={style.register_wrap_bg}>
      <div className="text-white text-center">
        <h4>Register Here </h4>
        <br />
        <div
          className={`btn btn-warning text-dark fw-bold `}
          onClick={() => isTeacher(true)}
        >
          As a TEACHER
        </div>{" "}
        <br /> <br />
        <div
          className={`btn btn-warning text-dark fw-bold `}
          onClick={() => isStudent(true)}
        >
          As a STUDENT
        </div>
      </div>
      {/* ${isTeacher || isStudent ? style.register_btn : style.register_btn_hide} */}
      <div className={`teacherForm`}>
        <TeacherRegister></TeacherRegister>
      </div>
      <div className={`studentForm`}>
        {/* <StudentRegister></StudentRegister> */}
      </div>
    </div>
  );
};

export default Register;
