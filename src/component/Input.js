import React from "react";

const Input = ({ formik, inputOption }) => {
  return (
    <div>
      {inputOption.map((item, index) => (
        <React.Fragment key={index}>
          {console.log(formik)}
          <label className="block text-green-500 font-bold text-lg ">
            {item.label}
          </label>
          <input
            className="py-2 px-4 w-64 rounded mt-1"
            type={item.type}
            placeholder={`${item.name}...`}
            name={item.name}
            {...formik.getFieldProps(item.name)}
          />
          {formik.errors[item.name] && formik.touched[item.name] && (
            <div className=" text-red-500 leading-4 w-96">
              {formik.errors[item.name]}
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Input;
