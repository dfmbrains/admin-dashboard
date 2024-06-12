import AdminLoading from "app/components/AdminLoading";
import React, { Suspense } from "react";

const AdminSuspense = ({ children }) => {
  return <Suspense fallback={<AdminLoading />}>{children}</Suspense>;
};

export default AdminSuspense;
