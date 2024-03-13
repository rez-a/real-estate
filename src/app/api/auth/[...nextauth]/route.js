import { validatePassword } from '@/utils/auth';
import connectToDB from '@/utils/connectToDB';
import User from 'src/models/User';
import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth from 'next-auth/next';

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      async authorize(credential) {
        const { email, password } = credential;

        try {
          await connectToDB();
        } catch (err) {
          throw new Error('مشکلی در سرور رخ داده است');
        }

        if (!email || !password)
          throw new Error('اطلاعات صحیح را وارد کنید');

        const user = await User.findOne({ email });

        if (!user) throw new Error('حساب کاربری وجود ندارد');

        const validation = await validatePassword(
          password,
          user.password
        );
        if (!validation)
          throw new Error('ایمیل یا رمز عبور اشتباه است');

        return { email };
      },
    }),
  ],
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
