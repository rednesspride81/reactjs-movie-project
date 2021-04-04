import { START_LOADING, STOP_LOADING } from "../constants/common.const";

const initialState = {
  loading: false,
};

const commonReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case START_LOADING:
      return { ...state, loading: true };

    case STOP_LOADING:
      return { ...state, loading: false };

    default:
      return state;
  }
};
export default commonReducer;
