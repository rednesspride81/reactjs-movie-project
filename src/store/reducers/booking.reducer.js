import {
  GET_BOOKING_LIST_FAILED,
  GET_BOOKING_LIST_SUCCESS,
} from "../constants/booking.const";

const initialState = {
  listChair: [],
  errors: {},
};

const bookingReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_BOOKING_LIST_SUCCESS:
      return { ...state, listChair: payload.danhSachGhe };

    case GET_BOOKING_LIST_FAILED:
      return { ...state, errors: payload };
    case "DANG_CHON":
      const { listChair } = state;
      const index = listChair.findIndex(
        (chair) => chair.maGhe === payload.maGhe
      );
      if (index !== -1) {
        const oldChair = listChair[index];
        const newChair = { ...oldChair, dangChon: !oldChair.dangChon };
        listChair[index] = newChair;
      }
      return { ...state };
    default:
      return state;
  }
};
export default bookingReducer;
