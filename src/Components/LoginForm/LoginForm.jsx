import React from 'react';
import { Placeholder } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it
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
          placeholder="password"
          {...register("password", { required: true })}
          className="mt-2 rounded w-50 p-2"
        />{" "}
        <br />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" className="btn btn-warning mt-2" />
      </form>
      <p className="text-white mt-3"> - or -</p>

      <Link to="/register" className="text-white">
        New member ? Register here
      </Link>
    </>
  );
};;

export default LoginForm;