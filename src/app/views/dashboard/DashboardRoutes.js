import { authRoles } from "app/auth/authRoles";
import Loadable from "app/components/Loadable";
import { lazy } from "react";

const Analytics = Loadable(lazy(() => import("./Analytics")));
const Analytics2 = Loadable(lazy(() => import("./Analytics2")));
const Analytics3 = Loadable(lazy(() => import("./Analytics3")));
const InventoryManagement = Loadable(
  lazy(() => import("./InventoryManagement")),
);

export const dashboardRoutes = [
  { path: "/dashboard/default", element: <Analytics2 /> },
  { path: "/dashboard/analytics", element: <Analytics3 />, auth: authRoles.sa },
  { path: "/dashboard/alternative", element: <Analytics /> },
  { path: "/dashboard/inventory-management", element: <InventoryManagement /> },
];
