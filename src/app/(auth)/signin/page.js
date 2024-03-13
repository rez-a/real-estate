import SignInPage from '@/components/templates/SignInPage';
import React from 'react';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const SignIn = async () =>
  (await getServerSession(authOptions)) ? (
    redirect('/')
  ) : (
    <SignInPage />
  );

export default SignIn;
