import React from "react";
import { Formik,Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import InputField from "../components/InputField";

export default function LoginPage() {
  const initialValues = {
    email: "",
    password: ""
  };

  const schema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6).required("Required")
  });

  const handleLoginSubmit = (values) => {
    console.log("Login:", values);
  };


  return (
    <div className="mx-auto max-w-md p-6">
      <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleLoginSubmit} validateOnMount>
      <Form className="flex flex-col gap-3">
        <h2 className="text-xl font-bold text-teal-700 mb-4">Login</h2>
        <InputField
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          required
        />

        <InputField
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          required
        />

        <button type="submit" className="bg-teal-600 text-white py-2 rounded hover:bg-teal-700 disabled:bg-teal-200">
          Login
        </button>

        <div className="text-sm text-gray-600 mt-2">
          Don't have an account? <Link to="/signup" className="text-teal-700 underline">Signup</Link>
        </div>
        <div className="text-sm text-gray-600">
          <Link to="/forgot-password" className="text-teal-700 underline">Forgot Password?</Link>
        </div>
      </Form>
      </Formik>
</div>
  );
}
