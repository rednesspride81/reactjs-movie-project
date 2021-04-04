import { combineReducers } from "redux";
import movieReducer from "./movie.reducer";
import commonReducer from "./common.reducer";
import UserReducer from "./user.reducer";
import bookingReducer from "./booking.reducer";

// Compile reducer
const rootReducer = combineReducers({
  common: commonReducer,
  movie: movieReducer,
  user: UserReducer,
  booking: bookingReducer,
});

export default rootReducer;
