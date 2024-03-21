'use client';

import { Form, Formik } from 'formik';
import React from 'react';
import TextInput from '../shared/TextInput';
import RadioGroupInput from '../shared/RadioGroupInput';
import TextList from '../shared/textList/TextList';
import addFilesSchema from 'src/validations/files/addFilesSchema';

const AddFilePage = () => {
  return (
    <div className="grid grid-cols-2">
      <h1 className="bg-blue-100 p-3 rounded-lg text-blue-600 font-semibold col-span-2 mb-8">
        ثبت آگهی
      </h1>
      <Formik
        initialValues={{
          title: '',
          description: '',
          address: '',
          phone: '',
          price: '',
          realState: '',
          createdAt: new Date(),
          category: 'villa',
          rules: [],
          amenities: [],
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={addFilesSchema}
      >
        {({ values, errors, touched }) => (
          <Form>
            <TextInput label="عنوان آگهی" name="title" />
            <TextInput
              label="توضیحات"
              name="description"
              textarea={true}
            />
            <TextInput label="آدرس" name="address" />
            <TextInput label="شماره تماس" name="phone" />
            <TextInput label="قیمت (تومان) " name="price" />
            <TextInput label="بنگاه" name="realState" />
            <RadioGroupInput label="دسته بندی" name="category" />
            <TextList
              label="امکانات رفاهی"
              name="amenities"
              list={values.amenities}
            />
            <TextList
              label="قوانین"
              name="rules"
              list={values.rules}
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white text-center p-2 rounded-lg col-span-2"
            >
              ثبت آگهی
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddFilePage;
