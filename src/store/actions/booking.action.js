import axios from "axios";
import {
  GET_BOOKING_LIST_SUCCESS,
  GET_BOOKING_LIST_FAILED,
} from "../constants/booking.const";
import { startLoading, stopLoading } from "./common.action";

export const getBookingList = (maLichChieu) => {
  return (dispatch) => {
    dispatch(startLoading());
    // call api
    axios({
      method: "GET",
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
      data: null,
    })
      .then((res) => {
        // Stop khi đã thành công
        dispatch(stopLoading());
        dispatch(getBookingListSuccess(res.data));
      })
      .catch((err) => {
        dispatch(stopLoading());
        dispatch(getBookingListFailed(err));
      });
  };
};

const getBookingListSuccess = (movieList) => {
  return {
    type: GET_BOOKING_LIST_SUCCESS,
    payload: movieList,
  };
};

const getBookingListFailed = (err) => {
  return {
    type: GET_BOOKING_LIST_FAILED,
    payload: err,
  };
};

export const postBookingTicket = (maLichChieu, danhSachVe) => {
  return (dispatch) => {
    const user = JSON.parse(localStorage.getItem("userLogin"));
    const token = user.accessToken;

    dispatch(startLoading());
    // call api
    axios({
      method: "POST",
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
      data: {
        maLichChieu,
        danhSachVe,
        taiKhoanNguoiDung: user.taiKhoan,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        // Stop khi đã thành công
        dispatch(stopLoading());
        alert("Đặt vé thành công");
      })
      .catch((err) => {
        dispatch(stopLoading());
        alert("Đặt vé thất bại");
      });
  };
};
