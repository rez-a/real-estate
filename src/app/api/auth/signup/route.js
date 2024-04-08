import { hashPassword } from '@/utils/auth';
import connectToDB from '@/utils/connectToDB';
import { NextResponse } from 'next/server';
import User from 'src/models/User';

export async function POST(req) {
  try {
    await connectToDB();
    const { email, password } = await req.json();

    if (!email || !password)
      return NextResponse.json(
        { error: 'لطفا اطلاعات معتبر وارد کنید' },
        { status: 422 }
      );

    const existedUser = await User.findOne({ email });
    if (existedUser)
      return NextResponse.json(
        { error: 'حساب کاربری وجود دارد' },
        { status: 422 }
      );

    const hashPass = await hashPassword(password);
    const user = await User.create({ email, password: hashPass });
    return NextResponse.json(
      {
        message: 'حساب کاربری با موفقیت ایجاد شد',
      },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: 'مشکلی در سرور رخ داده است' },
      { status: 500 }
    );
  }
}
