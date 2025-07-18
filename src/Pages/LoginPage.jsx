import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const formik = useFormik({
    initialValues: { 
        email: "", 
        password: "" 
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string().min(6).required("Required"),
    }),
    onSubmit: (values) => {
        console.log("Login:", values);
    } 
});

  return (
    <div className="mx-auto max-w-md p-6">
      <h2 className="text-xl font-bold text-teal-700 mb-4">Login</h2>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="border border-gray-300 p-2 rounded"
        />
        {formik.touched.email && formik.errors.email && (
          <div className="text-red-500 text-sm">{formik.errors.email}</div>
        )}

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className="border border-gray-300 p-2 rounded"
        />
        {formik.touched.password && formik.errors.password && (
          <div className="text-red-500 text-sm">{formik.errors.password}</div>
        )}

        <button type="submit" className="bg-teal-600 text-white py-2 rounded hover:bg-teal-700 disabled:bg-teal-200" disabled={!(formik.dirty && formik.isValid)}>
          Login
        </button>

        <div className="text-sm text-gray-600 mt-2">
          Don't have an account? <Link to="/signup" className="text-teal-700 underline">Signup</Link>
        </div>
        <div className="text-sm text-gray-600">
          <Link to="/forgot-password" className="text-teal-700 underline">Forgot Password?</Link>
        </div>
      </form>
</div>
  );
}
