import { Field } from 'formik';
import React from 'react';

const RadioGroupInput = ({ label, name }) => {
  return (
    <div className="mb-8">
      <p
        className="text-black text-sm font-semibold mb-2"
        htmlFor="email"
      >
        {label}
      </p>
      <div className="flex flex-wrap items-center gap-2">
        <label
          htmlFor="villa"
          className="flex items-center justify-center gap-2 bg-blue-100 px-3 py-1 rounded-md"
        >
          <Field type="radio" name={name} id="villa" value="villa" />
          <span className="text-blue-600">ویلا</span>
        </label>
        <label
          htmlFor="apartment"
          className="flex items-center justify-center gap-2 bg-blue-100 px-3 py-1 rounded-md"
        >
          <Field
            type="radio"
            name={name}
            id="apartment"
            value="apartment"
          />
          <span className="text-blue-600">آپارتمان</span>
        </label>
        <label
          htmlFor="store"
          className="flex items-center justify-center gap-2 bg-blue-100 px-3 py-1 rounded-md"
        >
          <Field type="radio" name={name} id="store" value="store" />
          <span className="text-blue-600">مغازه</span>
        </label>
        <label
          htmlFor="office"
          className="flex items-center justify-center gap-2 bg-blue-100 px-3 py-1 rounded-md"
        >
          <Field
            type="radio"
            name={name}
            id="office"
            value="office"
          />
          <span className="text-blue-600">شرکت</span>
        </label>
      </div>
    </div>
  );
};

export default RadioGroupInput;
