import FilesPage from '@/components/templates/FilesPage';
import connectToDB from '@/utils/connectToDB';
import React from 'react';
import File from 'src/models/File';

const Files = async ({ searchParams }) => {
  await connectToDB();
  const files =
    !searchParams?.category || searchParams?.category === 'all'
      ? await File.find().select('-userId')
      : await File.find({
          category: searchParams.category,
        }).select('-userId');

  if (!files)
    return (
      <h2 className="bg-neutral-100 text-black p-4 rounded-lg">
        مشکلی در دریافت فایل ها پیش آمده است!!
      </h2>
    );
  return <FilesPage files={JSON.parse(JSON.stringify(files))} />;
};

export default Files;
