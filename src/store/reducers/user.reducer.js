import {
  GET_USER_FAILED,
  GET_USER_INFO_FAILED,
  GET_USER_INFO_SUCCESS,
  GET_USER_SUCCESS,
} from "../constants/user.const";

const initialState = {
  userList: [],
  errors: {},
  userInfo: {},
};

const UserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_SUCCESS:
      return { ...state, userList: payload };
    case GET_USER_FAILED:
      return { ...state, errors: payload };
    case GET_USER_INFO_SUCCESS:
      return { ...state, userInfo: payload };
    case GET_USER_INFO_FAILED:
      return { ...state, errors: payload };
    default:
      return state;
  }
};
export default UserReducer;
