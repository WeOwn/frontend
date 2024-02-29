import React from "react";

const Button = ({ onClick = () => {}, type = "button", children, style }) => {
  return (
    <button onClick={onClick} type={type} style={style}>
      {children}
    </button>
  );
};

export default Button;
