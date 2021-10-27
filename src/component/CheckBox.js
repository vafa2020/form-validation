import React from "react";

const CheckBox = ({ formik, checkBoxOption, name, type = "checkbox" }) => {
  return (
    <div className="relative flex items-center mt-3">
      {checkBoxOption.map((item) => (
        <React.Fragment key={item.value}>
          <input
            type={type}
            id={item.value}
            name={name}
            value={item.value}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            checked={formik.values[name].includes(item.value)}
          />
          <label className="pr-3 pl-1" htmlFor={item.value}>
            {item.label}
          </label>
        </React.Fragment>
      ))}
      {formik.errors[name] && formik.touched[name] && (
        <div className="block absolute top-5 text-red-500 leading-4 w-96">
          {formik.errors[name]}
        </div>
      )}
    </div>
  );
};

export default CheckBox;
