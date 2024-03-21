import * as Yup from 'yup';

//regex
const phoneNumberRegex = /((0?9)|(\+?989))\d{9}/g;
const priceRegex = /[1-9]+[0-9]/;

const addFilesSchema = Yup.object().shape({
  title: Yup.string().required('لطفا یک عنوان را وارد کنید'),
  description: Yup.string().required(
    'لطفا توضیحات مختصری را وارد کنید'
  ),
  address: Yup.string().required('لطفا آدرس را وارد کنید'),
  phone: Yup.string()
    .required('لطفا تلفن تماس را جهت ارتباط وارد نمایید')
    .matches(phoneNumberRegex, 'لطفا یک شماره همراه معتبر وارد کنید'),
  price: Yup.string()
    .required('لطفا قیمت مد نظر خود را مشخص کنید')
    .matches(priceRegex, 'لطفا یک مبلغ استاندارد وارد کنید'),
  realState: Yup.string().required('نام بنگاه را وارد کنید'),
});

export default addFilesSchema;
