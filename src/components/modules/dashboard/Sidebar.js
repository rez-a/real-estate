import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import LogoutButton from './LogoutButton';
import User from 'src/models/User';
import { ADMIN } from 'src/constants/roleUsers';

const DashboardSidebar = async () => {
  const {
    user: { email },
  } = await getServerSession(authOptions);
  const { role } = await User.findOne({ email });

  return (
    <aside className="shadow-lg rounded-lg p-4 w-full sm:w-fit">
      <FaRegUserCircle size={40} className="text-blue-600 mx-auto" />
      {role === ADMIN ? (
        <p className="text-black text-center mt-1 font-semibold">
          ادمین
        </p>
      ) : null}
      <p className="text-neutral-400 border-b text-center mt-2">
        {email}
      </p>
      <ul className="text-sm font-semibold space-y-3 min-w-40 my-3  ">
        <li>
          <Link href="/dashboard">حساب کاربری</Link>
        </li>
        <li>
          <Link href="/dashboard/my-files">آگهی های من</Link>
        </li>
        <li>
          <Link href="/dashboard/add-file">ثبت آگهی</Link>
        </li>
        {role === ADMIN ? (
          <li>
            <Link href="/dashboard/waiting-confirmation">
              در انتظار تایید
            </Link>
          </li>
        ) : null}
      </ul>
      <LogoutButton />
    </aside>
  );
};

export default DashboardSidebar;
