import FileDetailsPage from '@/components/templates/FileDetailsPage';
import connectToDB from '@/utils/connectToDB';
import React from 'react';
import File from 'src/models/File';

const FileDetails = async ({ params: { fileId } }) => {
  await connectToDB();
  const file = await File.findOne({ _id: fileId });

  return <FileDetailsPage {...JSON.parse(JSON.stringify(file))} />;
};

export default FileDetails;
