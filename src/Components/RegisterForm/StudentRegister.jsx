import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../Firebase/Firebase.init";
import { sendEmailVerification } from "firebase/auth";
const StudentRegister = () => {
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
          createUserWithEmailAndPassword(data.email, data.password);
                createUserWithEmailAndPassword(data.email, data.password).then(
                  console.log(auth.currentUser)
                );

                sendEmailVerification(auth.currentUser).then(() => {
                  // Email verification sent!
                  // ...
                });
            console.log(data);
        }
    };

  return (
    <Container>
      <h3 className="text-white text-start">Students Registration</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Role of Registered Person */}
        <input
          defaultValue={"student"}
          {...register("role")}
          className="d-none"
        />
        {/* Name Of Registered Person */}
        <label htmlFor="name" className="text-white">
          Name:
        </label>
        <br />
        <input
          placeholder="Name"
          {...register("name", { required: true })}
          className=" w-25 p-2 rounded "
        />
        <br />
        {errors.name && <span className='text-danger'>This field is required</span>}
        <br />
        {/* Email Of Registered Person */}
        <label htmlFor="email" className="text-white">
          Email:
        </label>
        <br />
        <input
          placeholder="Email"
          {...register("email", { required: true })}
          className=" w-25 p-2 rounded "
        />{" "}
        <br /> {errors.email && <span className='text-danger'>This field is required</span>}
        <br />
        {/* LEVEL OF EDUCATION */}
        <label htmlFor="name" className="text-white">
          Level:
        </label>
        <br />
        <select
          {...register("level", { required: true })}
          className=" w-25 p-2 rounded "
        >
          <option value="class01">Class 01</option>
          <option value="class02">Class 02</option>
          <option value="class03">Class 03</option>
          <option value="class04">Class 04</option>
          <option value="class05">Class 05</option>
          <option value="class06">Class 06</option>
          <option value="class07">Class 07</option>
          <option value="class08">Class 08</option>
          <option value="class09">Class 09</option>
          <option value="class10">Class 10</option>
          <option value="SSC">SSC Batch</option>
          <option value="HSC1st">1st Year HSC</option>
          <option value="HSC2nd">2nd Year HSC</option>
          <option value="HSC">HSC Batch</option>
        </select>{" "}
        <br />
        {errors.level && <span className='text-danger'>This field is required</span>} <br />
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
        {errors.password && <span className='text-danger'>This field is required</span>} <br />
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
              {errors.confirmPass && <span className='text-danger'>This field is required</span>}
              {match?'':<span className="text-danger">Password not matched</span>}
              
        <br /><br />
              <input
                
          type="submit"
          value="Register"
          className="btn btn-warning text-dark"
        />
      </form>
    </Container>
  );
};

export default StudentRegister;
