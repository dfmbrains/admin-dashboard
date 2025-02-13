import { CssBaseline, ThemeProvider } from "@mui/material";
import useSettings from "app/hooks/useSettings";
import React from "react";

const AdminTheme = ({ children }) => {
  const { settings } = useSettings();
  let activeTheme = { ...settings.themes[settings.activeTheme] };

  return (
    <ThemeProvider theme={activeTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default AdminTheme;
