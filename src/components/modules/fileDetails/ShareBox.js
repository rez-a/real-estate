'use client';

import React from 'react';
import toast from 'react-hot-toast';
import { FaShareAlt } from 'react-icons/fa';
import useCopyToClipboardUrl from 'src/hooks/useCopyToClipboardUrl';

const ShareBox = () => {
  const { setter } = useCopyToClipboardUrl();

  const clickHandler = () => {
    setter();
    toast.success('آدرس صفحه با موفقیت کپی شد');
  };

  return (
    <p
      onClick={clickHandler}
      className="text-neutral-400 text-xs cursor-pointer"
    >
      <FaShareAlt className="inline ml-1 text-blue-600" />
      <span>اشتراک گذاری</span>
    </p>
  );
};

export default ShareBox;
