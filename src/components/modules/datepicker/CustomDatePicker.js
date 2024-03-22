import React from 'react';
import DatePicker from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';

const CustomDatePicker = ({ name, value, setValue }) => {
  return (
    <div className="mb-6">
      <label
        className="text-black text-sm font-semibold mb-2 block"
        htmlFor={name}
      >
        تاریخ ایجاد
      </label>
      <DatePicker
        name={name}
        value={value}
        onChange={(e) => setValue(new Date(e))}
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom-right"
        inputClass="border border-blue-600 border-dashed rounded-md w-full p-1 outline-none"
      />
    </div>
  );
};

export default CustomDatePicker;
