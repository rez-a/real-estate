import React from 'react';
import ConfirmFileBtn from './ConfirmFileBtn';
import DeleteFileBtn from './DeleteFileBtn';
import File from '@/components/shared/File';
import { Toaster } from 'react-hot-toast';

const WaitingConfirmationFile = ({ file }) => {
  return (
    <div className="relative group">
      <File {...file} />
      <div className="absolute right-4 top-4 text-xs hidden group-hover:block">
        <ConfirmFileBtn id={file._id} />
        <DeleteFileBtn id={file._id} />
      </div>
      <Toaster />
    </div>
  );
};

export default WaitingConfirmationFile;
