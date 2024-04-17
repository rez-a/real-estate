import React from 'react';
import WaitingConfirmationFile from '../modules/dashboard/WaitingConfirmationFile';

const WaitingConfirmationPage = ({ files }) => {
  return !!files.length ? (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {files.map((file) => (
        <WaitingConfirmationFile key={file._id} file={file} />
      ))}
    </div>
  ) : (
    <p className="bg-red-50 text-red-600 text-sm p-3 rounded-lg">
      هیچ فایلی برای تایید وجود ندارد
    </p>
  );
};

export default WaitingConfirmationPage;
