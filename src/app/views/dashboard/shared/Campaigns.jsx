import { Box } from "@mui/material";
import { AdminProgressBar, SimpleCard } from "app/components";
import { Small } from "app/components/Typography";
import React from "react";

const Campaigns = () => {
  return (
    <Box>
      <SimpleCard title="Campaigns">
        <Small color="text.secondary">Today</Small>
        <AdminProgressBar value={75} color="primary" text="Google (102k)" />
        <AdminProgressBar value={45} color="secondary" text="Twitter (40k)" />
        <AdminProgressBar value={75} color="primary" text="Tensor (80k)" />

        <Small color="text.secondary" display="block" pt={4}>
          Yesterday
        </Small>
        <AdminProgressBar value={75} color="primary" text="Google (102k)" />
        <AdminProgressBar value={45} color="secondary" text="Twitter (40k)" />
        <AdminProgressBar value={75} color="primary" text="Tensor (80k)" />

        <Small color="text.secondary" display="block" pt={4}>
          Yesterday
        </Small>
        <AdminProgressBar value={75} color="primary" text="Google (102k)" />
        <AdminProgressBar value={45} color="secondary" text="Twitter (40k)" />
        <AdminProgressBar value={75} color="primary" text="Tensor (80k)" />
      </SimpleCard>
    </Box>
  );
};

export default Campaigns;
