import File from '@/components/shared/File';
import React from 'react';
import EditFileBtn from './EditFileBtn';
import DeleteFileBtn from './DeleteFileBtn';

const DashboardFile = ({ file }) => {
  return (
    <div className="relative group">
      <File {...file} />
      <div className="absolute right-4 top-4 text-xs hidden group-hover:block">
        <EditFileBtn id={file._id} />
        <DeleteFileBtn id={file._id} />
      </div>
    </div>
  );
};

export default DashboardFile;
