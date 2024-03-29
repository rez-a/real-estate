'use client';

import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

const DeleteFileBtn = () => {
  const deleteHandler = () => {};
  return (
    <button
      onClick={deleteHandler}
      className="flex items-center gap-1 bg-red-600 hover:bg-red-500 cursor-pointer text-white px-2 py-0.5 rounded"
    >
      <span>حذف</span>
      <FaRegTrashAlt />
    </button>
  );
};

export default DeleteFileBtn;
