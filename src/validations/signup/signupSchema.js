import * as Yup from 'yup';

const passwordRgx =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;

const signupSchema = Yup.object().shape({
  email: Yup.string()
    .email('لطفا ایمیل معتبر وارد کنید')
    .required('این فیلد اجباری است'),
  password: Yup.string()
    .matches(passwordRgx, {
      message: 'رمز عبور آسان است',
    })
    .min(8, 'رمز عبور باید حداقل 8 کاراکتر باشد')
    .max(12, 'رمز عبور باید حداکثر 12 کاراکتر باشد'),
  confirmPassword: Yup.string()
    .required('این فیلد اجباری است')
    .oneOf([Yup.ref('password')], 'این فیلد با رمز عبور برابر نیست'),
});

export default signupSchema;
