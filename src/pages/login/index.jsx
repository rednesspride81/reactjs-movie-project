import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postLogin } from "../../store/actions/user.action";
import { NavLink, useHistory } from "react-router-dom";
import "./style.scss";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import LockIcon from "@material-ui/icons/Lock";
import "../../../node_modules/@material-ui/icons/";

function Login() {
  //   const result = useState({}); [state, setState]
  //   console.log("useState", result);
  // Tạo ra state để lưu info user
  const [user, setUser] = useState({
    taiKhoan: "",
    matKhau: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const handleChange = (event) => {
    const { value, name } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postLogin(user.taiKhoan, user.matKhau, history));
  };
  return (
    <div className="login">
      <div className="login__wrap">
        <form onSubmit={handleSubmit}>
          <span className="login__title">Login</span>
          <div className="login__input">
            {/* <label htmlFor="taiKhoan">Tài khoản</label> */}
            <input
              type="text"
              id="taiKhoan"
              name="taiKhoan"
              onChange={handleChange}
              placeholder="Tài khoản"
            />
            <div className="focus-input">
              <label htmlFor="taiKhoan" className="input-icon">
                <PermIdentityIcon />
              </label>
            </div>
          </div>
          <div className="login__input">
            {/* <label htmlFor="matKhau">Password</label> */}
            <input
              type="password"
              id="matKhau"
              name="matKhau"
              onChange={handleChange}
              placeholder="Mật khẩu"
            />
            <div className="focus-input">
              <label htmlFor="matKhau" className="input-icon">
                <LockIcon />
              </label>
            </div>
          </div>
          <div className="login__fogot-password">
            <a href="#">Quên mật khẩu?</a>
          </div>
          <div className="login__btn">
            <div className="login__btn-color"></div>
            <button type="submit">Login</button>
          </div>
          <div className="login__signup">
            <span>Or Sign Up Using</span>
            <NavLink to="/signup">SIGN UP</NavLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
