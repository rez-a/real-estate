import Sidebar from '@/components/modules/files/Sidebar';
import React from 'react';

const FilesLayout = ({ children }) => {
  return (
    <div className="flex flex-col sm:flex-row items-start gap-8">
      <Sidebar />
      <div className="grow w-full">{children}</div>
    </div>
  );
};

export default FilesLayout;
