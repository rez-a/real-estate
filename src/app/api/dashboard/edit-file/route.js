import connectToDB from '@/utils/connectToDB';
import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import File from 'src/models/File';
import User from 'src/models/User';

export async function PATCH(req) {
  try {
    await connectToDB();

    const {
      _id,
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

    const session = await getServerSession(req);
    if (!session)
      return NextResponse.json(
        {
          error: 'لطفا ابتدا وارد حساب کاربری خود شوید',
        },
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

    const file = await File.findOne({ _id });
    if (!user._id.equals(file.userId))
      return NextResponse.json(
        { error: 'شما به این آگهی دسترسی ندارید' },
        { status: 403 }
      );

    file.title = title;
    file.description = description;
    file.address = address;
    file.phone = phone;
    file.price = price;
    file.realState = realState;
    file.category = category;
    file.constructorDate = constructorDate;
    file.amenities = amenities;
    file.rules = rules;
    await file.save();

    return NextResponse.json(
      { message: 'آگهی با موفقیت ویرایش شد' },
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
