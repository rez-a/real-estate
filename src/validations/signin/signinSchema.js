import * as Yup from 'yup';

const signinSchema = Yup.object().shape({
  email: Yup.string()
    .required('این فیلد الزامی است')
    .email('ایمیل معتبر نیست'),
  password: Yup.string().required('این فیلد الزامی است'),
});

export default signinSchema;
