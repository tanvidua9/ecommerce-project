import React from "react";
import { Formik, Form} from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import InputField from "../components/InputField";

export default function ForgotPasswordPage() {
  const initialValues = { email: "" };

  const schema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required")
  });

  const handleForgotSubmit = (values) => {
    console.log("Forgot Password:", values);
  };

  return (
    <div className="max-w-md mx-auto p-6 ">
       <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleForgotSubmit}
      >
      <Form className="flex flex-col gap-3">
        <h2 className="text-xl font-bold text-teal-700 mb-4">Reset Password</h2>

        <InputField name="email" type="email" placeholder="Enter your email" label="Email address" required/>

        <button type="submit" className="bg-teal-600 text-white py-2 rounded hover:bg-teal-700">
          Send Reset Link
        </button>

        <div className="text-sm text-gray-600 mt-2">
          Remember your password? <Link to="/login" className="text-teal-700 underline">Login</Link>
        </div>
      </Form>
      </Formik>
    </div>
  );
}
