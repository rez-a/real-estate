import React from 'react';
import DashboardFile from '../modules/dashboard/DashboardFile';
import { Toaster } from 'react-hot-toast';

const MyFilesPage = ({ files }) => {
  return !!files.length ? (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
      {files.map((file) => (
        <DashboardFile key={file._id} file={file} />
      ))}
      <Toaster />
    </div>
  ) : (
    <p className="bg-red-100 text-red-600 p-3 rounded-xl font-semibold">
      هیچ آگهی موجود نیست
    </p>
  );
};

export default MyFilesPage;
