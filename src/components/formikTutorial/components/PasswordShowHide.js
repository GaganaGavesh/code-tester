import React, { useState } from "react";
import "./PasswordShowHide.css";

const PasswordShowHide = ({ field, form }) => {
  const [showHidePassword, changeShowHidePassword] = useState(false);
  const hasError = form.touched[field.name] && form.errors[field.name];

  return (
    <div className="input-container">
      
      <input
        type={showHidePassword ? "text" : "password"}
        {...field}
        className={hasError ? "input-error input-field" : "input-field"}
        placeholder="Password"
      />
      <i
        className={!showHidePassword ? "fa fa-eye password-icon" : "fa fa-eye-slash password-icon"}
        style={{
            position: 'absolute',
            top: '188px',
            right: '10px',
            cursor: 'pointer'
        }}
        onClick={() => changeShowHidePassword(!showHidePassword)}
      >
      </i>
    </div>
  );
};

export default PasswordShowHide;