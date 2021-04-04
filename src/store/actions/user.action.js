import axios from "axios";
import {
  GET_USER_FAILED,
  GET_USER_INFO_FAILED,
  GET_USER_INFO_SUCCESS,
  GET_USER_SUCCESS,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  SIGNUP_FAILED,
  SIGNUP_SUCCESS,
} from "../constants/user.const";
import { startLoading, stopLoading } from "./common.action";

export const getUserList = () => {
  return (dispatch) => {
    dispatch(startLoading());
    axios({
      method: "GET",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01",
      data: null,
    })
      .then((res) => {
        dispatch(stopLoading());
        dispatch(getUserListSuccess(res.data));
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(getUserListFailed(err));
      });
  };
};

const getUserListSuccess = (userList) => {
  return {
    type: GET_USER_SUCCESS,
    payload: userList,
  };
};

const getUserListFailed = (error) => {
  return {
    type: GET_USER_FAILED,
    payload: error,
  };
};

export const postLogin = (taiKhoan, matKhau, history) => {
  return (dispatch) => {
    dispatch(startLoading());
    axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: {
        taiKhoan,
        matKhau,
      },
    })
      .then((res) => {
        dispatch(stopLoading());
        // Lưu data xuống localStore
        localStorage.setItem("userLogin", JSON.stringify(res.data));
        // Truyền hàm qua reducer
        dispatch(postLoginSuccess(res.data));
        console.log(history);
        history.goBack();
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(postLoginFailed(err));
      });
  };
};

const postLoginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
};

const postLoginFailed = (error) => {
  return {
    type: LOGIN_FAILED,
    payload: error,
  };
};

export const postSignup = (signupUser, history) => {
  return (dispatch) => {
    dispatch(startLoading());
    axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      data: signupUser,
    })
      .then((res) => {
        dispatch(stopLoading());
        dispatch(postSignupSucess(res.data));
        history.push("/login");
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(postSignupFailed(err));
      });
  };
};

const postSignupSucess = (signupUser) => {
  return {
    type: SIGNUP_SUCCESS,
    payload: signupUser,
  };
};

const postSignupFailed = (error) => {
  return {
    type: SIGNUP_FAILED,
    payload: error,
  };
};

export const getUserInfo = (userAccount) => {
  return (dispatch) => {
    dispatch(startLoading());
    axios({
      method: "POST",
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
      data: userAccount,
    })
      .then((res) => {
        dispatch(stopLoading());
        dispatch(getUserInfoSucess(res.data));
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(getUserInfoFailed(err));
      });
  };
};

const getUserInfoSucess = (userInfo) => {
  return {
    type: GET_USER_INFO_SUCCESS,
    payload: userInfo,
  };
};

const getUserInfoFailed = (error) => {
  return {
    type: GET_USER_INFO_FAILED,
    payload: error,
  };
};
