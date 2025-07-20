import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { FormikInput } from "../components/InputField";


export default function SignupPage() {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  const schema = Yup.object({
    name: Yup.string().required("Name required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6).required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Required")
  });

  const handleSignupSubmit = (values) => {
    console.log("Signup:", values);
  };

  return (
    <div className="mx-auto max-w-md p-6">
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSignupSubmit}
        validateOnMount
      >
      <Form className="flex flex-col gap-3">
        <h2 className="text-xl font-bold text-teal-700 mb-4">Sign Up</h2>
        <FormikInput
          id="name"
          name="name"
          placeholder="Name"
          required
        />

        <FormikInput
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          required
        />

        <FormikInput
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          required
        />

        <FormikInput
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          required
        />

        <button type="submit" className="bg-teal-600 text-white py-2 rounded hover:bg-teal-700 disabled:bg-teal-200">
          Signup
        </button>

        <div className="text-sm text-gray-600 mt-2">
          Already have an account? <Link to="/login" className="text-teal-700 underline">Login</Link>
        </div>
      </Form>
      </Formik>
    </div>
  );
}
