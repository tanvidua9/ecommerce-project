import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

export default function ForgotPasswordPage() {
  const formik = useFormik({
    initialValues: { email: "" },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Required"),
    }),
    onSubmit: (values) => console.log("Forgot Password:", values),
  });

  return (
    <div className="max-w-md mx-auto p-6 ">
      <h2 className="text-xl font-bold text-teal-700 mb-4">Reset Password</h2>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
        <input
          name="email"
          type="email"
          placeholder="Enter your email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="border border-gray-300 p-2 rounded"
        />
        {formik.touched.email && formik.errors.email && (
          <div className="text-red-500 text-sm">{formik.errors.email}</div>
        )}

        <button type="submit" className="bg-teal-600 text-white py-2 rounded hover:bg-teal-700">
          Send Reset Link
        </button>

        <div className="text-sm text-gray-600 mt-2">
          Remember your password? <Link to="/login" className="text-teal-700 underline">Login</Link>
        </div>
      </form>
    </div>
  );
}
