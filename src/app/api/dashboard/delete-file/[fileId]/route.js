import connectToDB from '@/utils/connectToDB';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import File from 'src/models/File';
import User from 'src/models/User';

export async function DELETE(req, context) {
  try {
    await connectToDB();
    const id = context.params.fileId;

    const session = await getServerSession(req);
    if (!session)
      return NextResponse.json(
        {
          error: 'لطفا ابتدا وارد حساب کاربری خود شوید',
        },
        { status: 401 }
      );

    const user = await User.findOne({
      email: session.user.email,
    });
    if (!user)
      return NextResponse.json(
        { error: 'کاربر وجود ندارد' },
        { status: 404 }
      );

    const file = await File.findOne({ _id: id });
    if (!user._id.equals(file.userId))
      return NextResponse.json(
        { error: 'شما به این آگهی دسترسی ندارید' },
        { status: 403 }
      );

    await File.deleteOne({ _id: id });
    return NextResponse.json(
      { message: 'آگهی با موفقیت حذف شد' },
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: 'خطا در برقراری ارتباط رخ داده است' },
      { status: 500 }
    );
  }
}
