import React from 'react';
import FileData from './FileData';
import connectToDB from '@/utils/connectToDB';
import File from 'src/models/File';

const EditFilePage = async ({ fileId }) => {
  await connectToDB();
  const file = await File.findOne({ _id: fileId });

  return <FileData data={JSON.parse(JSON.stringify(file))} />;
};

export default EditFilePage;
