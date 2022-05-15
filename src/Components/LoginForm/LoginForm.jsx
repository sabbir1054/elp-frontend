import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../Firebase/Firebase.init";

const LoginForm = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  //router

    const navigate = useNavigate();
    const location = useLocation();
  const from = location?.state?.from?.pathname || '/';
   
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
      
    signInWithEmailAndPassword(data.email, data.password)
      .then(() => {
       

        
    });
  };
  // user ? console.log(user.user) : console.log(error);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="email"
          {...register("email", { required: true })}
          className="rounded w-50 p-2"
        />{" "}
        <br />
        <input
          type="password"
          placeholder="password"
          {...register("password", { required: true })}
          className="mt-2 rounded w-50 p-2"
        />{" "}
        <br />
        {/* errors will return when field validation fails  */}
        {errors.password && <span>This field is required</span>}
        <input type="submit" value='Submit' className="btn btn-warning mt-2" />
      </form>
      <p className="text-white mt-3"> - or -</p>

      <Link to="/register" className="text-white">
        New member ? Register here
      </Link>
    </>
  );
};

export default LoginForm;
