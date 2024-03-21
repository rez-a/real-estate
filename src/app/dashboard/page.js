import DashboardPage from '@/components/templates/DashboardPage';
import React from 'react';
import useFindUser from 'src/hooks/useFindUser';

const page = async () => {
  const user = await useFindUser();
  return <DashboardPage createdAt={user.createdAt} />;
};

export default page;
