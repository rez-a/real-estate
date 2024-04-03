'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import { CiEdit } from 'react-icons/ci';

const EditFileBtn = ({ id }) => {
  const router = useRouter();
  const editHandler = () => {
    router.push(`/dashboard/edit-file/${id}`);
  };
  return (
    <button
      onClick={editHandler}
      className="flex items-center gap-1 bg-green-600 mb-2 hover:bg-green-500 cursor-pointer text-white px-2 py-0.5 rounded"
    >
      <span>ویرایش</span>
      <CiEdit />
    </button>
  );
};

export default EditFileBtn;
