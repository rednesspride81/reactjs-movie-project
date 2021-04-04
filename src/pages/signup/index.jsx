import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { postSignup } from "../../store/actions/user.action";
import { useHistory } from "react-router-dom";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import LockIcon from "@material-ui/icons/Lock";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import FaceIcon from "@material-ui/icons/Face";
import "./style.scss";

const signupUserSchema = yup.object().shape({
  taiKhoan: yup
    .string()
    .max(20, "Tài khoản quá dài")
    .matches(
      /^(?![_.])(?!.*[_.]{2})[a-z0-9._]+(?<![_.])$/,
      "Tài khoản không hợp lệ"
    )
    .required("Tài khoản không được để trống!"),
  matKhau: yup
    .string()
    // .matches(/^[a-zA-Z0-9]/, "Mật khẩu không được chứa ký tự đặc biệt")
    .max(20, "Mật khẩu quá dài!")
    .min(8, "Mật khẩu quá ngắn")
    .required("Mật khẩu không được để trống!"),
  email: yup
    .string()
    .required("Email không được để trống!")
    .email("Email không hợp lệ!"),
  soDt: yup
    .string()
    .matches(/^[0-9]+$/, "* Số điện thoại không hợp lệ!")
    .min(9, "Số điện thoại không hợp lệ!")
    .required("Số điện thoại không được để trống"),
  // maNhom: yup.string().required("Mã nhóm không được để trống"),
  hoTen: yup.string().required("Họ tên không được để trống"),
});

function Signup() {
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = (values) => {
    dispatch(postSignup(values, history));
  };

  return (
    <div className="signup">
      <div className="signup__wrap">
        <Formik
          initialValues={{
            taiKhoan: "",
            matKhau: "",
            email: "",
            soDt: "",
            maNhom: "GP15",
            maLoaiNguoiDung: "KhachHang",
            hoTen: "",
          }}
          validationSchema={signupUserSchema}
          onSubmit={handleSubmit}
          render={(formikProps) => (
            <Form>
              <span className="signup__title">Signup</span>
              <div className="signup__input-cover">
                <div className="signup__input">
                  <Field
                    type="text"
                    id="taiKhoan"
                    name="taiKhoan"
                    onChange={formikProps.handleChange}
                    placeholder="Tài khoản"
                  />
                  <div className="focus-input">
                    <label htmlFor="taiKhoan" className="input-icon">
                      <PermIdentityIcon />
                    </label>
                  </div>
                </div>
                <ErrorMessage
                  component="span"
                  className="errorMsg"
                  name="taiKhoan"
                />
              </div>
              <div className="signup__input-cover">
                <div className="signup__input">
                  <Field
                    type="password"
                    id="matKhau"
                    name="matKhau"
                    onChange={formikProps.handleChange}
                    placeholder="Mật khẩu"
                  />
                  <div className="focus-input">
                    <label htmlFor="matKhau" className="input-icon">
                      <LockIcon />
                    </label>
                  </div>
                </div>
                <ErrorMessage
                  component="span"
                  className="errorMsg"
                  name="matKhau"
                />
              </div>
              <div className="signup__input-cover">
                <div className="signup__input">
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    onChange={formikProps.handleChange}
                    placeholder="Email"
                  />
                  <div className="focus-input">
                    <label htmlFor="email" className="input-icon">
                      <EmailIcon />
                    </label>
                  </div>
                </div>
                <ErrorMessage
                  component="span"
                  className="errorMsg"
                  name="email"
                />
              </div>
              <div className="signup__input-cover">
                <div className="signup__input">
                  <Field
                    type="text"
                    id="soDt"
                    name="soDt"
                    onChange={formikProps.handleChange}
                    placeholder="Số điện thoại"
                  />
                  <div className="focus-input">
                    <label htmlFor="soDt" className="input-icon">
                      <PhoneIcon />
                    </label>
                  </div>
                </div>
                <ErrorMessage
                  component="span"
                  className="errorMsg"
                  name="soDt"
                />
              </div>
              <div className="signup__input-cover">
                <div className="signup__input">
                  <Field
                    type="text"
                    id="hoTen"
                    name="hoTen"
                    onChange={formikProps.handleChange}
                    placeholder="Họ tên"
                  />
                  <div className="focus-input">
                    <label htmlFor="hoTen" className="input-icon">
                      <FaceIcon />
                    </label>
                  </div>
                </div>
                <ErrorMessage
                  component="span"
                  className="errorMsg"
                  name="hoTen"
                />
              </div>
              <div className="signup__btn">
                <div className="signup__btn-color"></div>
                <button type="submit">SIGNUP</button>
              </div>
            </Form>
          )}
        />
      </div>
    </div>
  );
}

export default Signup;
