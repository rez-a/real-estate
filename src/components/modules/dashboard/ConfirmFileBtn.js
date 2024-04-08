'use client';

import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';
import { GiConfirmed } from 'react-icons/gi';
import { confirmFileHandler } from 'src/services/axios/configs/dashboard/requests';

const ConfirmFileBtn = ({ id }) => {
  const router = useRouter();

  const confirmHandler = async (id) => {
    const toastId = toast.loading('درحال انتشار فایل');
    const res = await confirmFileHandler(id);
    if (res?.data) {
      toast.success(res.data.message, { id: toastId });
      router.refresh();
    }
    toast.remove(toastId);
  };
  return (
    <button
      onClick={() => confirmHandler(id)}
      className="flex items-center gap-1 bg-green-600 mb-2 hover:bg-green-500 cursor-pointer text-white px-2 py-0.5 rounded"
    >
      <span>انتشار</span>
      <GiConfirmed />
    </button>
  );
};

export default ConfirmFileBtn;
