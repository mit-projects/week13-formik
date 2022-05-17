import React from "react";
import { useFormik } from 'formik';

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    }, onSubmit: (values) => {
      console.log(values);
    }, validate: (values) => {
      let errors = {};
      if (!values.email) errors.email = "Field required";
      if (!values.password) errors.password = "Field required";
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      return errors;
    }
  })
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Email:</div>
        <input name="email" id="emailField" type="email" onChange={formik.handleChange} value={formik.values.email} />
        {formik.errors.email && <div id="emailError" style={{ color: 'red' }}>{formik.errors.email}</div>}
        <div>Password</div>
        <input name="password" id="pswField" type="password" onChange={formik.handleChange} value={formik.values.password} />
        {formik.errors.password && <div id="pswError" style={{ color: 'red' }}>{formik.errors.password}</div>}
        <button type="submit" id="submitBtn">Submit</button>
      </form >
    </div >
  );
}

export default App;
