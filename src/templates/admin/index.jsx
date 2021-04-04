import React from "react";
import { Route } from "react-router-dom";

function AdminTemplate(props) {
  return (
    <>
      <header>Header của admin</header>
      <main className="d-flex justify-content-lg-around">
        <section>SideBar</section>
        <section>{props.children}</section>
      </main>
    </>
  );
}
const RouteAdminTemplate = ({ path, exact, Component }) => {
  return (
    <Route path={path} exact={exact}>
      <AdminTemplate>
        <Component />
      </AdminTemplate>
    </Route>
  );
};
export default RouteAdminTemplate;
