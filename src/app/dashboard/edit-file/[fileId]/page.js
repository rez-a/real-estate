import EditFilePage from '@/components/templates/EditFilePage';
import React from 'react';

const EditFile = (context) => {
  const {
    params: { fileId },
  } = context;
  return <EditFilePage fileId={fileId} />;
};

export default EditFile;
