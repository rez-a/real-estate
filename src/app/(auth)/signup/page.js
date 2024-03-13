import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import SignUpPage from '@/components/templates/SignUpPage';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';

import React from 'react';

const SignUp = async () =>
  (await getServerSession(authOptions)) ? (
    redirect('/')
  ) : (
    <SignUpPage />
  );

export default SignUp;
