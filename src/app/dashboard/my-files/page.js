import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import MyFilesPage from '@/components/templates/MyFilesPage';
import connectToDB from '@/utils/connectToDB';
import { getServerSession } from 'next-auth';
import React from 'react';
import User from 'src/models/User';

const MyFiles = async () => {
  await connectToDB();
  const session = await getServerSession(authOptions);

  const [user] = await User.aggregate([
    { $match: { email: session.user.email } },
    {
      $lookup: {
        from: 'files',
        foreignField: 'userId',
        localField: '_id',
        as: 'files',
      },
    },
  ]);

  return (
    <MyFilesPage files={JSON.parse(JSON.stringify(user.files))} />
  );
};

export default MyFiles;
