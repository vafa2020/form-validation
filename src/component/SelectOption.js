const SelectOption = ({ selectOption, name, formik }) => {
  return (
    <div className="relative mt-2">
      <select name={name} {...formik.getFieldProps({ name })}>
        {selectOption.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      {formik.errors[name] && formik.touched[name] && (
        <div className="block absolute top-6  text-red-500 leading-4 w-96">
          {formik.errors[name]}
        </div>
      )}
    </div>
  );
};

export default SelectOption;
