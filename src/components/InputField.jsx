import React from "react";
import FormikHOC from "./FormicHOC";


function InputField({ name, id,label,touched,error,...rest }) {

  let borderClass = "border-gray-300 focus:border-teal-500";
  if (touched && error) {
    borderClass = "border-red-500 focus:border-red-500";
  }

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={id} className="sr-only">
          {label}
        </label>
      )}
      <input
        name={name}
        id={id}
        {...rest}
        className={`p-2 rounded border ${borderClass} focus:outline-none`}
      />
      {touched && error && <div className="text-red-500 text-sm">{error}</div>}
    </div>
  );
}

export const FormikInput = FormikHOC(InputField);

export default InputField;