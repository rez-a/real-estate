import DashboardSidebar from '@/components/modules/dashboard/Sidebar';
import { getServerSession } from 'next-auth';
import React from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

export const metadata = {
  title: 'پنل کاربری',
};

const DashboardLayout = async ({ children }) =>
  (await getServerSession(authOptions)) ? (
    <div className="flex items-start my-8 gap-4 ">
      <DashboardSidebar />
      <div id="content" className="grow">
        {children}
      </div>
    </div>
  ) : (
    redirect('/signin')
  );

export default DashboardLayout;
