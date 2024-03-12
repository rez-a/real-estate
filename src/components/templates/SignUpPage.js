'use client';
import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Link from 'next/link';
import signupSchema from 'src/validations/signup/signupSchema';
import { ThreeDots } from 'react-loader-spinner';
import { Toaster, toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const SignUpPage = () => {
  const router = useRouter();
  const handleSignUp = async (userData, callback) => {
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: { 'Content-Types': 'application/json' },
    });
    const data = await res.json();
    console.log(data);
    if (res.ok) {
      toast.success(data.message);
      router.push('/signin');
      callback();
      return;
    }
    toast.error(data.error);
  };
  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-blue-600 font-semibold text-2xl mb-4">
        فرم ثبت نام
      </h2>
      <div className="border-2 border-blue-600 rounded-lg p-4">
        <Formik
          initialValues={{
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={signupSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            const { email, password } = values;
            await handleSignUp({ email, password }, resetForm);

            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="flex flex-col items-start min-w-60 mb-6">
                <label
                  className="text-blue-600 text-sm font-semibold mb-2"
                  htmlFor="email"
                >
                  ایمیل:
                </label>
                <Field
                  type="text"
                  name="email"
                  id="email"
                  className="border border-blue-600 border-dashed rounded-md w-full p-1 outline-none"
                />
                <ErrorMessage name="email">
                  {(msg) => (
                    <small className="bg-rose-100 text-rose-700 font-semibold px-2 pt-0.5 rounded mt-2">
                      {msg}
                    </small>
                  )}
                </ErrorMessage>
              </div>
              <div className="flex flex-col items-start min-w-60 mb-6">
                <label
                  className="text-blue-600 text-sm font-semibold mb-2"
                  htmlFor="password"
                >
                  رمز عبور:
                </label>
                <Field
                  type="text"
                  name="password"
                  id="password"
                  className="border border-blue-600 border-dashed rounded-md w-full p-1 outline-none"
                />
                <ErrorMessage name="password">
                  {(msg) => (
                    <small className="bg-rose-100 text-rose-700 font-semibold px-2 pt-0.5 rounded mt-2">
                      {msg}
                    </small>
                  )}
                </ErrorMessage>
              </div>
              <div className="flex flex-col items-start min-w-60 mb-6">
                <label
                  className="text-blue-600 text-sm font-semibold mb-2"
                  htmlFor="confirmPassword"
                >
                  تکرار رمز عبور:
                </label>
                <Field
                  type="text"
                  name="confirmPassword"
                  id="confirmPassword"
                  className="border border-blue-600 border-dashed rounded-md w-full p-1 outline-none"
                />
                <ErrorMessage name="confirmPassword">
                  {(msg) => (
                    <small className="bg-rose-100 text-rose-700 font-semibold px-2 pt-0.5 rounded mt-2">
                      {msg}
                    </small>
                  )}
                </ErrorMessage>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-all"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <ThreeDots
                    visible={isSubmitting}
                    height="40"
                    width="40"
                    color="#fff"
                    radius="9"
                    wrapperClass="justify-center"
                  />
                ) : (
                  'ثبت نام'
                )}
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <p className="text-xs text-neutral-500 mt-4">
        <span>حساب کاربری دارید؟</span>
        <span>
          <Link
            className="text-blue-600 underline font-semibold"
            href="/signin"
          >
            ورود
          </Link>
        </span>
      </p>
      <Toaster />
    </section>
  );
};

export default SignUpPage;
