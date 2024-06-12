import React, { Suspense } from "react";
import Loading from "app/components/AdminLoading";

const Loadable = Component => props => (
  <Suspense fallback={<Loading />}>
    <Component {...props} />
  </Suspense>
);

export default Loadable;
