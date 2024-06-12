import Loadable from "app/components/Loadable";
import { lazy } from "react";

const AdminCalendar = Loadable(
  lazy(() => import("app/views/calendar/AdminCalendar")),
);

const calendarRoutes = [{ path: "/calendar", element: <AdminCalendar /> }];

export default calendarRoutes;
