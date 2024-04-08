'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';
import { FaRegTrashAlt } from 'react-icons/fa';
import { deleteFileHandler } from 'src/services/axios/configs/dashboard/requests';

const DeleteFileBtn = ({ id }) => {
  const router = useRouter();

  const deleteHandler = async (id) => {
    const toastId = toast.loading('درحال حذف فایل');
    const res = await deleteFileHandler(id);
    if (res?.data) {
      toast.success(res.data.message, { id: toastId });
      router.refresh();
    }
    toast.remove(toastId);
  };
  return (
    <>
      <button
        onClick={() => deleteHandler(id)}
        className="flex items-center gap-1 bg-red-600 hover:bg-red-500 cursor-pointer text-white px-2 py-0.5 rounded"
      >
        <span>حذف</span>
        <FaRegTrashAlt />
      </button>
    </>
  );
};

export default DeleteFileBtn;
