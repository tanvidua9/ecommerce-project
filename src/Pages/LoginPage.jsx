import React from "react";
import {withFormik} from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import InputField from "../components/InputField";
import axios from "axios";

function callLoginApi(values,bag){
  axios.post('https://myeasykart.codeyogi.io/login', {
        email: values.email,
        password: values.password
    }).then((response) => {
        const { user, token } = response.data;
        localStorage.setItem("token", token);
        bag.props.setUser(user);
    }).catch((error) => {
        console.log("Invalid Credentials");
    })
}


const initialValues = {
    email: "",
    password: ""
  };

  const schema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6).required("Required")
  });


export function LoginPage({values,errors,touched,handleChange,handleBlur,handleSubmit}) {
  return (
  <div className="mx-auto max-w-md p-6">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <h2 className="text-xl font-bold text-teal-700 mb-4">Login</h2>
          <InputField
            name="email"
            id="email"
            type="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email}
            touched={touched.email}
          />

          <InputField
            name="password"
            id="password"
            type="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.password}
            touched={touched.password}
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
      </form>
  </div>
  );
}

const myHOC = withFormik({
  initialValues: initialValues,
  validationSchema: schema,
  handleSubmit: callLoginApi,
  validateOnMount: true
});


const EasyLogin = myHOC(LoginPage);

export default EasyLogin;