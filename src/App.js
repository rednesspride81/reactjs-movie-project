// import logo from "./logo.svg";
import { BrowserRouter, Switch } from "react-router-dom";
import "./App.css";
// import Home from "./pages/main/home";
// import Booking from "./pages/main/booking";
// import Header from "./components/header";
import { adminRouter, mainRouter } from "../src/configs/router";
import RouterMainTemplate from "./templates/main";
import RouteAdminTemplate from "./templates/admin";

function App() {
  const renderMainRouter = () => {
    return mainRouter.map(({ path, exact, Component }) => {
      return (
        <RouterMainTemplate
          path={path}
          exact={exact}
          Component={Component}
        ></RouterMainTemplate>
      );
    });
  };
  const renderAdminRouter = () => {
    return adminRouter.map(({ path, exact, Component }) => {
      return (
        <RouteAdminTemplate
          path={path}
          exact={exact}
          Component={Component}
        ></RouteAdminTemplate>
      );
    });
  };
  return (
    <>
      {/* Khởi tạo router cho dự án */}
      <BrowserRouter>
        {/* header */}
        {/* <Header /> */}
        {/* Mỗi url chỉ hiện thị 1 trang duy nhất */}
        <Switch>
          {renderMainRouter()}
          {renderAdminRouter()}
          {/* url === https://localhost3000/
          <Route path="/" exact={true}>
            <Home />
          </Route>
           url === https://localhost3000/movie-detail
          <Route path="/movie-detail">
            <DetailMovie />
          </Route>
           url === https://localhost3000/booking
          <Route path="/booking">
            <Booking />
          </Route> */}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
