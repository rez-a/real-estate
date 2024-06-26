import connectToDB from '@/utils/connectToDB';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { authOptions } from '../../auth/[...nextauth]/route';
import User from 'src/models/User';
import File from 'src/models/File';
import { Types } from 'mongoose';

export async function POST(req) {
  try {
    await connectToDB();

    const {
      title,
      description,
      address,
      phone,
      price,
      realState,
      category,
      constructorDate,
      amenities,
      rules,
    } = await req.json();

    const session = await getServerSession(authOptions);

    if (!session)
      return NextResponse.json(
        { error: 'لطفا ابتدا وارد حساب کاربری خود شوید' },
        { status: 401 }
      );

    const user = await User.findOne({ email: session.user.email });

    if (!user)
      return NextResponse.json(
        { error: 'کاربر وجود ندارد' },
        { status: 404 }
      );

    if (
      !title ||
      !description ||
      !address ||
      !phone ||
      !price ||
      !realState
    )
      return NextResponse.json(
        {
          error: 'لطفا اطلاعات معتبر را وارد کنید',
        },
        { status: 422 }
      );

    const newFile = await File.create({
      title,
      description,
      address,
      phone,
      price: +price,
      realState,
      category,
      constructorDate,
      amenities,
      rules,
      userId: new Types.ObjectId(user._id),
    });

    return NextResponse.json(
      { message: 'فایل با موفقیت ایجاد شد' },
      { status: 201 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: 'خطا در برقراری ارتباط رخ داده است' },
      { status: 500 }
    );
  }
}
