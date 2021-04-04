import {
  GET_MOVIE_LIST_SUCCESS,
  GET_MOVIE_LIST_FAILED,
  GET_MOVIE_DETAIL_SUCCESS,
  GET_MOVIE_DETAIL_FAILED,
} from "../constants/movie.const";

const initialState = {
  movieList: [],
  movieDetail: {},
  errors: {},
};

const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MOVIE_LIST_SUCCESS:
      state.movieList = payload;
      return { ...state };

    case GET_MOVIE_LIST_FAILED:
      return { ...state };

    // detail
    case GET_MOVIE_DETAIL_SUCCESS:
      return { ...state, movieDetail: payload };

    case GET_MOVIE_DETAIL_FAILED:
      return { ...state, errors: payload };
    default:
      return state;
  }
};

export default movieReducer;
