import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import connectToDB from '@/utils/connectToDB';
import { getServerSession } from 'next-auth';
import User from 'src/models/User';

const useFindUser = async () => {
  const {
    user: { email },
  } = await getServerSession(authOptions);
  await connectToDB();
  const user = await User.findOne({ email });
  return user;
};

export default useFindUser;
