const Radio = ({ name, formik, radioOption }) => {
  return (
    <div className="relative flex items-center mt-2">
      {radioOption.map((item) => (
        <>
          <input
            type="radio"
            id={item.value}
            name={name}
            {...formik.getFieldProps({ name })}
            value={item.value}
            checked={formik.values[name] === item.value}
          />
          <label className="pr-3 pl-1" htmlFor={item.value}>
            {item.label}
          </label>
        </>
      ))}
      {formik.errors[name] && formik.touched[name] && (
        <div className="block absolute top-8 left-1 text-red-500 leading-4 w-96">
          {formik.errors[name]}
        </div>
      )}
    </div>
  );
};

export default Radio;
