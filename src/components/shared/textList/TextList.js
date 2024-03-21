import { Field, FieldArray } from 'formik';
import React from 'react';
import { GoTrash } from 'react-icons/go';
import { MdAddBox } from 'react-icons/md';

const TextList = ({ label, name, list }) => {
  return (
    <div className="flex flex-col items-start min-w-60 mb-6">
      <label
        className="text-black text-sm font-semibold mb-2"
        htmlFor="email"
      >
        {label}
      </label>
      <FieldArray name={name}>
        {({ remove, push }) => (
          <>
            {!!list.length &&
              list.map((amenitie, index) => (
                <div
                  key={index}
                  className="flex items-stretch gap-2 mb-3"
                >
                  <Field
                    type="text"
                    name={`${name}.${index}`}
                    className="border border-blue-600 border-dashed rounded-md w-full p-1 outline-none"
                  />
                  <button
                    className="flex items-center px-2  rounded text-sm gap-1 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition"
                    onClick={() => remove(index)}
                  >
                    <span>حذف</span>
                    <GoTrash />
                  </button>
                </div>
              ))}
            <button
              type="button"
              className="bg-blue-600 text-white p-2 rounded flex items-center gap-2"
              onClick={() => push('')}
            >
              <span>افزودن</span>
              <MdAddBox />
            </button>
          </>
        )}
      </FieldArray>
    </div>
  );
};

export default TextList;
