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
    <div className="flex flex-col sm:flex-row items-start gap-8">
      <DashboardSidebar />
      <div id="content" className="grow w-full">
        {children}
      </div>
    </div>
  ) : (
    redirect('/signin')
  );

export default DashboardLayout;
