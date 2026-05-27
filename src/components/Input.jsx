const Input = ({ label, text, type = "text", handleChange, value }) => {
  return (
    <div className="flex flex-col justify-center gap-1">
      <label
        htmlFor={label}
        className="text-base font-semibold capitalize">
        {text}:
      </label>
      <input
        id={label}
        name={label}
        type={type}
        autoComplete="false"
        value={value}
        onChange={handleChange}
        required
        className="neo-sm px-3 py-1"
      />
    </div>
  );
};

export default Input;
