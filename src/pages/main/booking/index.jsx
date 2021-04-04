import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  getBookingList,
  postBookingTicket,
} from "../../../store/actions/booking.action";

function Booking() {
  const dispatch = useDispatch();
  // const data = useSelector((state) => state.booking);
  const { listChair } = useSelector((state) => state.booking);

  // Lấy mã lịch chiếu từ url xuống
  const params = useParams();
  // tương đương vs componentDidMount
  useEffect(() => {
    dispatch(getBookingList(params.maLichChieu));
  }, []);

  const setClassNameChair = (daDat, dangChon) => {
    if (daDat) {
      return "btn-danger";
    } else if (dangChon) {
      return "btn-warning";
    } else {
      return "btn-info";
    }
  };

  const renderListChair = () => {
    return listChair.map((chair, index) => {
      return (
        <button
          className={
            setClassNameChair(chair.daDat, chair.dangChon) + " btn m-2"
          }
          key={index}
          onClick={() => {
            dispatch({
              type: "DANG_CHON",
              payload: chair,
            });
          }}
        >
          {chair.tenGhe}
        </button>
      );
    });
  };
  return (
    <div>
      <h2>Booking</h2>
      <section className="container">
        <h2>List Chair</h2>
        {renderListChair()}
        <div>
          <button
            className="btn btn-success"
            onClick={() => {
              const danhSachVe = listChair.filter((chair) => chair.dangChon);
              dispatch(postBookingTicket(params.maLichChieu, danhSachVe));
            }}
          >
            Đặt vé
          </button>
        </div>
      </section>
    </div>
  );
}

export default Booking;
