import React from "react";
import "./Button.css"

export function Buton  ({ type, onClick, children, clas }) {
   

  return (
    <button className={clas} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

