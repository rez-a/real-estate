import Sidebar from '@/components/modules/files/Sidebar';
import React from 'react';

const FilesLayout = ({ children }) => {
  return (
    <div className="flex items-start gap-8">
      <Sidebar />
      <div className="grow">{children}</div>
    </div>
  );
};

export default FilesLayout;
