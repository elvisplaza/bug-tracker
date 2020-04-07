import React from "react";
import s from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      className={`${s.button_default_styles} ${props.disable && s.disabled} ${props.green && s.green}`}>
      {props.children}
    </button>
  );
};

export default Button;
