import Input from "./component/Input";
import Radio from "./component/Radio";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import SelectOption from "./component/SelectOption";
import CheckBox from "./component/CheckBox";

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  passwordConfirm: "",
  gender: "",
  nationality: "",
  interest: [],
  terms: false,
};
const radioOption = [
  { label: "Male", value: "0" },
  { label: "FeMale", value: "1" },
];
const checkBoxOption = [
  { label: "React.js", value: "React.js" },
  { label: "Vue.js", value: "Vue.js" },
];
const inputOption = [
  { label: "Name", name: "name", type: "text" },
  { label: "Email", name: "email", type: "email" },
  { label: "Phone Number", name: "phoneNumber", type: "text" },
  { label: "Password", name: "password", type: "password" },
  { label: "Password Confirm", name: "passwordConfirm", type: "password" },
];
const selectOption = [
  { label: "Select Nationality", value: "" },
  { label: "IRAN", value: "IR" },
  { label: "USA", value: "US" },
  { label: "GERMANI", value: "GER" },
];
function App() {
  const onSubmit = (values) => {
    console.log(values);
    // axios
    //   .post("http://localhost:3001/users", {
    //     ...values,
    //     birthday: "28/may/1996",
    //   })
    //   .then((res) => console.log(res.data))
    //   .catch((err) => console.log(err));
  };
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(6, "minimem character is 6"),
    email: Yup.string()
      .required("Email is required")
      .email("format is invalid"),
    phoneNumber: Yup.string()
      .required("Phone Number is required")
      .matches(
        /^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/,
        "format is invalid"
      ),
    password: Yup.string()
      .required("Password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        `Must Contain 8 Characters,One Uppercase, One Lowercase,One Number and One Special Case Character`
      ),
    passwordConfirm: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
    gender: Yup.string().required("Gender is required"),
    nationality: Yup.string().required("Nationality is required"),
    interest: Yup.array().min(1).required("Interest is required"),
    terms: Yup.boolean()
      .required("The terms and conditions must be accepted.")
      .oneOf([true], "The terms and conditions must be accepted."),
  });
  const formik = useFormik({
    initialValues: initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
    enableReinitialize: true,
  });

  console.log(formik);
  return (
    <div className="flex justify-center items-center bg-gray-300 h-screen">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col justify-center"
      >
        <Input formik={formik} inputOption={inputOption} />
        <Radio formik={formik} radioOption={radioOption} name="gender" />
        <SelectOption
          selectOption={selectOption}
          name="nationality"
          formik={formik}
        />
        <CheckBox
          formik={formik}
          checkBoxOption={checkBoxOption}
          name="interest"
        />
        <div className="relative flex items-center mt-2">
          <label
            className="pr-3 pl-1 text-green-500 font-bold text-lg"
            htmlFor="terms"
          >
            Terms
          </label>
          <input
            type="checkbox"
            id="terms"
            name="terms"
            value={true}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            checked={formik.values.terms === true}
          />

          {formik.errors.terms && formik.touched.terms && (
            <div className="block absolute top-6 left-1 text-red-500 leading-4 w-96">
              {formik.errors.terms}
            </div>
          )}
        </div>
        <button
          className=" rounded bg-gray-200 w-20 py-2 px-4 mt-5"
          type="submit"
          disabled={!formik.isValid}
        >
          submit
        </button>
      </form>
    </div>
  );
}

export default App;
