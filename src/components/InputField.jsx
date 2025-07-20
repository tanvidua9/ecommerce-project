import React from "react";
import { useField } from "formik";

export default function InputField({ name, label, ...rest }) {
  const [data, meta] = useField(name);
  const { value, onChange, onBlur } = data;
  const { error, touched } = meta;
  let borderClass = "border-gray-300 focus:border-teal-500";
  if (error && touched) {
    borderClass = "border-red-500 focus:border-red-500";
  }

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={name} className="sr-only">
          {label}
        </label>
      )}
      <input
        {...rest}
        {...data}
        className={`p-2 rounded border ${borderClass} focus:outline-none`}
      />
      {touched && error && <div className="text-red-500 text-sm">{error}</div>}
    </div>
  );
}