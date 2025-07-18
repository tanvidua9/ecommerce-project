import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

export default function SignupPage() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name required"),
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string().min(6).required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: (values) => console.log("Signup:", values),
  });

  return (
    <div className="mx-auto max-w-md p-6">
      <h2 className="text-xl font-bold text-teal-700 mb-4">Sign Up</h2>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
        <input
          name="name"
          placeholder="Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          className="border border-gray-300 p-2 rounded"
        />
        {formik.touched.name && formik.errors.name && (
          <div className="text-red-500 text-sm">{formik.errors.name}</div>
        )}

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

        <input
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
          className="border border-gray-300 p-2 rounded"
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword && (
          <div className="text-red-500 text-sm">{formik.errors.confirmPassword}</div>
        )}

        <button type="submit" className="bg-teal-600 text-white py-2 rounded hover:bg-teal-700 disabled:bg-teal-200" disabled={!(formik.dirty && formik.isValid)}>
          Signup
        </button>

        <div className="text-sm text-gray-600 mt-2">
          Already have an account? <Link to="/login" className="text-teal-700 underline">Login</Link>
        </div>
      </form>
    </div>
  );
}
