import useSettings from "app/hooks/useSettings";
import React from "react";
import AdminSuspense from "app/components/AdminSuspense";
import { AdminLayouts } from "./index";

const AdminLayout = props => {
  const { settings } = useSettings();
  const Layout = AdminLayouts[settings.activeLayout];

  return (
    <AdminSuspense>
      <Layout {...props} />
    </AdminSuspense>
  );
};

export default AdminLayout;
