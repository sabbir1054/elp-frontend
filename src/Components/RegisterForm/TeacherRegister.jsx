import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";

const TeacherRegister = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Container>
      <h3 className="text-white text-start">Teachers Registration</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          defaultValue={"teacher"}
          {...register("role")}
          className="d-none"
        />
        <label htmlFor="name" className="text-white">
          {" "}
          Name:{" "}
        </label>{" "}
        <br />
        <input
          placeholder="Name"
          {...register("name", { required: true })}
          className=" w-25 p-2 rounded "
        />{" "}
        <br /> <br />
        <label htmlFor="name" className="text-white">
          {" "}
          Email:{" "}
        </label>{" "}
        <br />
        <input
          placeholder="Email"
          {...register("email", { required: true })}
          className=" w-25 p-2 rounded "
        />{" "}
        <br /> <br />
        <label htmlFor="name" className="text-white">
          {" "}
          Level:{" "}
        </label>{" "}
        <br />
        <select {...register("LEVEL")} className=" w-25 p-2 rounded ">
          <option value="female">Primary Level {`(class: One - Five)`}</option>
          <option value="male">
            Secondary Level {`(class: Six - Ten (SSC))`}
          </option>
          <option value="other">
            Higher Level {`(class: HSC 1st Year - HSC 2nd Year)  `}
          </option>
        </select>{" "}
        <br /> <br />
        <label htmlFor="name" className="text-white">
          {" "}
          Subject:{" "}
        </label>{" "}
        <br />
        <input
          placeholder="Subject"
          {...register("Subject", { required: true })}
          className=" w-25 p-2 rounded "
        />{" "}
        <br /> <br />
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" className="btn btn-warning text-dark" />
      </form>
    </Container>
  );
};

export default TeacherRegister;
