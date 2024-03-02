'use client';
import React from 'react';
import { Field, Form, Formik } from 'formik';
import Link from 'next/link';

const SignUpPage = () => {
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
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {() => (
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
              </div>
              <button className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-all">
                ثبت نام
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
    </section>
  );
};

export default SignUpPage;
