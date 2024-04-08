import WaitingConfirmationPage from '@/components/templates/WaitingConfirmationPage';
import connectToDB from '@/utils/connectToDB';
import React from 'react';
import File from 'src/models/File';

const WaitingConfirmation = async () => {
  await connectToDB();
  const files = await File.find({ published: false });
  return (
    <WaitingConfirmationPage
      files={JSON.parse(JSON.stringify(files))}
    />
  );
};

export default WaitingConfirmation;
