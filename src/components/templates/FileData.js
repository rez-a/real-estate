'use client';

import { Form, Formik } from 'formik';
import React from 'react';
import { useRouter } from 'next/navigation';
import TextInput from '../shared/TextInput';
import RadioGroupInput from '../shared/RadioGroupInput';
import TextList from '../shared/textList/TextList';
import addFilesSchema from 'src/validations/files/addFilesSchema';
import CustomDatePicker from '../modules/datepicker/CustomDatePicker';
import {
  addFileHandler,
  editFileHandler,
} from 'src/services/axios/configs/dashboard/requests';
import toast, { Toaster } from 'react-hot-toast';
import Loading from '../shared/Loading';

const FileData = ({ data }) => {
  const router = useRouter();
  const initialValue = {
    title: '',
    description: '',
    address: '',
    phone: '',
    price: '',
    realState: '',
    constructorDate: new Date(),
    category: 'villa',
    rules: [],
    amenities: [],
  };

  const submitHandler = async (fileData, callback) => {
    const res = data
      ? await editFileHandler(fileData)
      : await addFileHandler(fileData);
    if (res.data) {
      toast.success(res.data.message);
      callback();
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <h1 className="bg-blue-100 p-3 rounded-lg text-blue-600 font-semibold col-span-2 mb-8">
        {data ? 'ویرایش آگهی' : 'ثبت آگهی'}
      </h1>
      <Formik
        initialValues={data || initialValue}
        onSubmit={async (values, { resetForm, setSubmitting }) => {
          await submitHandler(values, resetForm);
          setSubmitting(false);
          location.reload();
        }}
        validationSchema={addFilesSchema}
      >
        {({
          values,
          errors,
          touched,
          setFieldValue,
          isSubmitting,
        }) => (
          <Form className="grid grid-cols-1 lg:grid-cols-2 lg:col-span-2 gap-4">
            <TextInput label="عنوان آگهی" name="title" />

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
            <CustomDatePicker
              name="constructorDate"
              value={values.constructorDate}
              setValue={(value) =>
                setFieldValue('constructorDate', value)
              }
            />
            <TextInput
              label="توضیحات"
              name="description"
              textarea={true}
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white text-center p-2 rounded-lg lg:col-span-2"
            >
              {isSubmitting ? (
                <Loading />
              ) : data ? (
                'ویرایش آگهی'
              ) : (
                'ثبت آگهی'
              )}
            </button>
          </Form>
        )}
      </Formik>
      <Toaster />
    </div>
  );
};

export default FileData;
