const Select = ({ label, text, options, handleChange, value }) => {
  return (
    <div className="flex flex-col justify-center gap-1">
      <label
        htmlFor={label}
        className="text-base font-semibold capitalize">
        {text}:
      </label>
      <select
        name={label}
        id={label}
        onChange={handleChange}
        value={value}
        className="neo-sm px-3 py-1 h-9">
        {options.map(({ label, value }) => (
          <option
            key={value}
            value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
