import React from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import InputField from "../components/InputField";
import axios from "axios";
import withUser from "../components/withUser";

function callSignupApi(values, bag) {
  axios
    .post("https://myeasykart.codeyogi.io/signup", {
      fullName: values.name,
      email: values.email,
      password: values.password,
    })
    .then((response) => {
      const { user, token } = response.data;
      localStorage.setItem("token", token);
      bag.props.setUser(user);
    })
    .catch((error) => {
        console.log("Signup error:", error.message);
    });
}

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const schema = Yup.object({
  name: Yup.string().required("Name required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(6, "Minimum 6 characters").required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Required"),
});

function SignupForm({values,errors,touched,handleChange,handleBlur,handleSubmit}) {
  return (
    <div className="mx-auto max-w-md p-6">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <h2 className="text-xl font-bold text-teal-700 mb-4">Sign Up</h2>

        <InputField
          name="name"
          id="name"
          placeholder="Full Name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.name}
          touched={touched.name}
        />

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

        <InputField
          name="confirmPassword"
          id="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.confirmPassword}
          touched={touched.confirmPassword}
        />

        <button
          type="submit"
          className="bg-teal-600 text-white py-2 rounded hover:bg-teal-700 disabled:bg-teal-200"
        >
          Signup
        </button>

        <div className="text-sm text-gray-600 mt-2">
          Already have an account?{" "}
          <Link to="/login" className="text-teal-700 underline">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
}

const FormikSignup=withFormik({
  initialValues: initialValues,
  validationSchema: schema,
  handleSubmit: callSignupApi,
  validateOnMount: true,
})(SignupForm);


export default withUser(FormikSignup);




//FORMIK USE BELOW FOR REVISION:

// import { Formik, Form } from "formik";
// import { FormikInput } from "../components/InputField";



// export default function SignupPage() {
  
//   return (
//     <div className="mx-auto max-w-md p-6">
//       <Formik
//         initialValues={initialValues}
//         validationSchema={schema}
//         onSubmit={callSignupApi}
//         validateOnMount
//       >
//       <Form className="flex flex-col gap-3">
//         <h2 className="text-xl font-bold text-teal-700 mb-4">Sign Up</h2>
//         <FormikInput
//           id="name"
//           name="name"
//           placeholder="Name"
//           required
//         />

//         <FormikInput
//           id="email"
//           name="email"
//           type="email"
//           placeholder="Email"
//           required
//         />

//         <FormikInput
//           id="password"
//           name="password"
//           type="password"
//           placeholder="Password"
//           required
//         />

//         <FormikInput
//           id="confirmPassword"
//           name="confirmPassword"
//           type="password"
//           placeholder="Confirm Password"
//           required
//         />

//         <button type="submit" className="bg-teal-600 text-white py-2 rounded hover:bg-teal-700 disabled:bg-teal-200">
//           Signup
//         </button>

//         <div className="text-sm text-gray-600 mt-2">
//           Already have an account? <Link to="/login" className="text-teal-700 underline">Login</Link>
//         </div>
//       </Form>
//       </Formik>
//     </div>
//   );
// }
