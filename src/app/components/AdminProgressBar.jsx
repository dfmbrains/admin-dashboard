import {
  Grid,
  LinearProgress,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { Small } from "./Typography";

const CustomLinearProgress = styled(LinearProgress)(() => ({
  borderRadius: 2,
  background: "rgba(0, 0, 0, 0.1)",
}));

const AdminProgressBar = ({
  text = "",
  value = 75,
  spacing = 2,
  color = "primary",
  coloredText = false,
}) => {
  const theme = useTheme();
  const secondary = theme.palette.text.secondary;

  return (
    <Grid container spacing={spacing} alignItems="center">
      <Grid item xs={text ? 8 : 12}>
        <CustomLinearProgress
          color={color}
          value={value}
          variant="determinate"
        ></CustomLinearProgress>
      </Grid>

      {text !== "" && (
        <Grid item xs={text ? 4 : false}>
          <Typography color={color}>
            <Small sx={{ color: coloredText ? "" : secondary }}>{text}</Small>
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default AdminProgressBar;
