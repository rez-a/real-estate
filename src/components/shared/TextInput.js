import { ErrorMessage, Field } from 'formik';
import React from 'react';

const TextInput = ({ label, textarea = false, name }) => {
  return (
    <div className="flex flex-col items-start  md:min-w-60 mb-6">
      <label
        className="text-black text-sm font-semibold mb-2"
        htmlFor="email"
      >
        {label}
      </label>
      <Field
        type="text"
        name={name}
        id={name}
        rows={5}
        component={textarea ? 'textarea' : 'input'}
        className="border border-blue-600 border-dashed rounded-md w-full p-1 outline-none"
      />
      <ErrorMessage name={name}>
        {(msg) => (
          <small className="bg-rose-100 text-rose-700 font-semibold px-2 pt-0.5 rounded mt-2">
            {msg}
          </small>
        )}
      </ErrorMessage>
    </div>
  );
};

export default TextInput;
