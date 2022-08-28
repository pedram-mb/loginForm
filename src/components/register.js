
import { Formik , Form } from "formik";
import React from "react";
import img from "../image/img-01.png";
import * as Yup from "yup";
import FormikControls from "../formikComponents/formikControls";

const initialValues = {
  user_name : '',
  first_name : '',
  last_name : '',
  email: '',
  // phone_number : '',
  password: '',
  confirm_password: '',
  auth_mode : 'mobile',
};
const onSubmit = (values) => {
  console.log(values);
  alert('ok')
};
const validationSchema = Yup.object({
  email: Yup.string()
    .required("لطفا این قسمت رو پر کنید")
    .email("لطفا فرمت  درست این فبلد رو رعایت کنید"),
  password: Yup.string()
    .required("لطفا این قسمت رو پر کنید")
    .min(6, "حداقل 6 کارکتر مجاز می باشد").matches(/^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/ , 'یک حرف بزرگ هم وارد کنید'),
  confirm_password: Yup.string().required("لطفا این قسمت رو پر کنید").oneOf([Yup.ref('password') , ''] , 'با رمز عبور مطابقت ندارد'),
  user_name: Yup.string().required("لطفا این قسمت رو پر کنید"),
  first_name: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])/ , 'حداقل یک حرف بزرگ'),
  last_name: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])/ , 'حداقل یک حرف بزرگ'),
  // phone_number: Yup.number().required("لطفا این قسمت رو پر کنید"),
});

const Register = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formik) => {
        console.log(formik);
        return (
          <div className="limiter">
            <div className="container-login100">
              <div className="wrap-login100">
                {/* <!-- input form --> */}
                <Form className="login100-form validate-form">
                  <span className="login100-form-title">
                    ثبت نام
                  </span>
                  {/* enter firstname */}
                  <FormikControls 
                  formik={formik}
                  control="input"
                  type="text"
                  name="first_name"
                  icon="fa fa-solid fa-user"
                  label="نام کوچک"
                  />
                  {/* enter lastname */}
                  <FormikControls 
                  formik={formik}
                  control="input"
                  type="text"
                  name="last_name"
                  icon="fa fa-solid fa-user"
                  label="نام خانوادگی"
                  />
                  {/* enter user-name */}
                  <FormikControls 
                  formik={formik}
                  control="input"
                  type="text"
                  name="user_name"
                  icon="fa fa-solid fa-user"
                  label="نام کاربری"
                  />
                  {/* enter email */}
                  <FormikControls 
                  formik={formik}
                  control="input"
                  type="email"
                  name="email"
                  icon="fa fa-envelope"
                  label="ایمیل"
                  />
                  {/* enter phonenumber */}
                  {/* <FormikControls 
                  formik={formik}
                  control="input"
                  type="number"
                  name="phone_number"
                  icon="fa fa-envelope"
                  label="شماره تماس"
                  /> */}
                  {/* enter password */}
                  <FormikControls 
                  formik={formik}
                  control="input"
                  type="password"
                  name="password"
                  icon="fa fa-lock"
                  label="رمز عبور"
                  />
                  {/* enter confirm_password */}
                  <FormikControls 
                  formik={formik}
                  control="input"
                  type="password"
                  name="confirm_password"
                  icon="fa fa-lock"
                  label="رمز عبور"
                  />
                  {/* login button */}
                  <div className="container-login100-form-btn">
                    <button className="login100-form-btn">ثبت نام</button>
                  </div>
                  {/* restore password */}
                  <div className="text-center p-t-12">
                    <a className="txt2" href="#">
                      بازگردانی رمز عبور!
                    </a>
                  </div>
                  {/* register */}
                  <div className="text-center p-t-136">
                    <a className="txt2" href="#">
                      <i
                        className="fa fa-long-arrow-right m-l-5"
                        aria-hidden="true"
                      ></i>
                      ورود به جساب کاربری ؟
                    </a>
                  </div>
                </Form>
                {/* form image */}
                <div className="login100-pic js-tilt" data-tilt>
                  <img src={img} alt="IMG" />
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};
export default Register;