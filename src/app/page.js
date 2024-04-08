import HomePage from '@/components/templates/HomePage';
import connectToDB from '@/utils/connectToDB';
import File from 'src/models/File';

export default async function Home() {
  await connectToDB();
  const latestFile = await File.find({ published: true }).limit(10);

  return (
    <HomePage latestFile={JSON.parse(JSON.stringify(latestFile))} />
  );
}
