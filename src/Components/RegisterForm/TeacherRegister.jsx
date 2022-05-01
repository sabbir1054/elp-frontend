import React, { useState } from "react";
import { Container } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import {sendEmailVerification } from "firebase/auth";

import { useForm } from "react-hook-form";
import auth from "../../Firebase/Firebase.init";

const TeacherRegister = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
 

  const [match, setMatch] = useState(true);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (data.password !== data.confirmPass) {
      setMatch(false);
    } else {
      createUserWithEmailAndPassword(data.email, data.password).then(console.log(auth.currentUser));
     
sendEmailVerification(auth.currentUser).then(() => {
  // Email verification sent!

  // ...
});

      console.log(data);
    }
  };
  return (
    <Container>
      <h3 className="text-white text-start">Teachers Registration</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Role of register person */}
        <input
          defaultValue={"teacher"}
          {...register("role")}
          className="d-none"
        />
        {/* Name of register person */}
        <label htmlFor="name" className="text-white">
          Name:
        </label>
        <br />
        <input
          placeholder="Name"
          {...register("name", { required: true })}
          className=" w-25 p-2 rounded "
        />
        <br />{" "}
        {errors.name && (
          <span className="text-danger">This field is required</span>
        )}{" "}
        <br />
        {/* Email of register person */}
        <label htmlFor="name" className="text-white">
          Email:
        </label>
        <br />
        <input
          placeholder="Email"
          {...register("email", { required: true })}
          className=" w-25 p-2 rounded "
        />
        <br />{" "}
        {errors.email && (
          <span className="text-danger">This field is required</span>
        )}{" "}
        <br />
        {/* Level of register person */}
        <label htmlFor="name" className="text-white">
          Level:
        </label>
        <br />
        <select {...register("level")} className=" w-25 p-2 rounded ">
          <option value="Primary Level">
            Primary Level {`(class: One - Five)`}
          </option>
          <option value="Secondary Level">
            Secondary Level {`(class: Six - Ten (SSC))`}
          </option>
          <option value="Higher Level">
            Higher Level {`(class: HSC 1st Year - HSC 2nd Year)  `}
          </option>
        </select>
        <br />{" "}
        {errors.level && (
          <span className="text-danger">This field is required</span>
        )}
        <br />
        {/* Subject of teacher */}
        <label className="text-white">Subject:</label>
        <br />
        <input
          placeholder="Subject"
          {...register("subject", { required: true })}
          className=" w-25 p-2 rounded "
        />{" "}
        <br />{" "}
        {errors.subject && (
          <span className="text-danger">This field is required</span>
        )}
        <br />
        <label htmlFor="name" className="text-white">
          Password:
        </label>
        <br />
        <input
          type='password'
          placeholder="Password"
          {...register("password", { required: true })}
          className=" w-25 p-2 rounded "
        />{" "}
        <br />
        {errors.password && (
          <span className="text-danger">This field is required</span>
        )}{" "}
        <br />
        <label htmlFor="confirmPass" className="text-white">
          Confirm Password:
        </label>
        <br />
        <input
          type='password'
          placeholder="Confirm Password"
          {...register("confirmPass", { required: true })}
          className=" w-25 p-2 rounded "
        />{" "}
        <br />
        {errors.confirmPass && (
          <span className="text-danger">This field is required</span>
        )}
        {match ? "" : <span className="text-danger">Password not matched</span>}
        <br />
        <br />
        <input
          type="submit"
          value="Register"
          className="btn btn-warning text-dark"
        />
      </form>
    </Container>
  );
};

export default TeacherRegister;
