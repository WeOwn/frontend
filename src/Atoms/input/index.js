import React, { useState } from "react";

const Input = ({
  type = "text",
  placeholder,
  value,
  onChange = () => {},
  style,
}) => {
  const [inputValue, setInputValue] = useState(value);

  function changeHandler(event) {
    setInputValue(event.target.value);
    onChange(event.target.value);
  }

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={inputValue}
      onChange={changeHandler}
      style={style}
    />
  );
};

export default Input;
