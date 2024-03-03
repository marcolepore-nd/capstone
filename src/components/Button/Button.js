import React from "react";
import "./Button.scss";

const Button = props =>

<button
  className={props.secondary?'secondary':''}
  {...props}
>
  {props.label}
</button>

export default Button;
