import { Formik , Form } from "formik";
import React from "react";
import img from "../image/img-01.png";
import * as Yup from "yup";
import FormikControls from "../formikComponents/formikControls";

const initialValues = {
  email: "",
  password: "",
};
const onSubmit = (values) => {
  console.log(values);
};
const validationSchema = Yup.object({
  email: Yup.string()
    .required("لطفا این قسمت رو پر کنید")
    .email("لطفا فرمت  درست این فبلد رو رعایت کنید"),
  password: Yup.string()
    .required("لطفا این قسمت رو پر کنید")
    .min(6, "حداقل 6 کارکتر مجاز می باشد").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/ , 'یک حرف بزرگ هم وارد کنید')
});

const LoginForm = () => {
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
                    ورود به پنل کاربری
                  </span>
                  {/* <!-- enter email--> */}
					<FormikControls 
					formik={formik}
					control="input"
					type="email"
					name="email"
					icon="fa fa-envelope"
					label="ایمیل"
					/>
                  {/* <!-- enter password--> */}
				  <FormikControls 
					formik={formik}
					control="input"
					type="password"
					name="password"
					icon="fa fa-lock"
					label="رمز عبور"
					/>

                  {/* <!-- login button--> */}
                  <div className="container-login100-form-btn">
                    <button className="login100-form-btn">ورود</button>
                  </div>
                  {/* <!-- / login button --> */}

                  {/* <!-- restore password --> */}
                  <div className="text-center p-t-12">
                    <a className="txt2" href="#">
                      بازگردانی رمز عبور!
                    </a>
                  </div>
                  {/* <!-- / restore password--> */}

                  {/* <!-- register--> */}
                  <div className="text-center p-t-136">
                    <a className="txt2" href="#">
                      <i
                        className="fa fa-long-arrow-right m-l-5"
                        aria-hidden="true"
                      ></i>
                      هنوز ثبت نام نکرده اید ؟
                    </a>
                  </div>
                  {/* <!-- / register--> */}
                </Form>
                {/* <!-- / input form --> */}

                {/* <!-- form image --> */}
                <div className="login100-pic js-tilt" data-tilt>
                  <img src={img} alt="IMG" />
                </div>
                {/* <!-- / form image --> */}
              </div>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};
export default LoginForm;
