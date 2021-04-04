import Booking from "../pages/main/booking";
import DetailMovie from "../pages/main/detail-movie";
import Home from "../pages/main/home";
import User from "../pages/admin/user";
import Dashboard from "../pages/admin/dashboard";
import Movie from "../pages/admin/movie";
import Login from "../pages/login";
import Signup from "../pages/signup";
import UserDetail from "../pages/admin/user-detail";

export const mainRouter = [
  { path: "/", exact: true, Component: Home },
  { path: "/movie-detail/:maPhim", exact: false, Component: DetailMovie },
  { path: "/booking/:maLichChieu", exact: false, Component: Booking },
  { path: "/login", exact: false, Component: Login },
  { path: "/signup", exact: false, Component: Signup },
];

export const adminRouter = [
  { path: "/admin/user", exact: false, Component: User },
  { path: "/admin/dashboard", exact: false, Component: Dashboard },
  { path: "/admin/movie", exact: false, Component: Movie },
  { path: "/admin/user-detail/:taiKhoan", exact: false, Component: UserDetail },
];
