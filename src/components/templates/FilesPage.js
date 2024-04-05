import React from 'react';
import File from '../shared/File';

const FilesPage = ({ files }) => {
  return !!files.length ? (
    <div className="grid grid-cols-4 gap-2">
      {files.map((file) => (
        <File key={file._id} {...file} />
      ))}
    </div>
  ) : (
    <h2 className="bg-red-50 text-red-600 p-4 rounded-lg">
      هیچ فایلی وجود ندارد!!
    </h2>
  );
};

export default FilesPage;
