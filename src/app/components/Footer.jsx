import { AppBar, Button, ThemeProvider, Toolbar } from "@mui/material";
import { styled, useTheme } from "@mui/system";
import useSettings from "app/hooks/useSettings";
import { topBarHeight } from "app/utils/constant";
import React from "react";
import { Paragraph, Span } from "./Typography";

const AppFooter = styled(Toolbar)(() => ({
  display: "flex",
  alignItems: "center",
  minHeight: topBarHeight,
  "@media (max-width: 499px)": {
    width: "100%",
    display: "table",
    minHeight: "auto",
    padding: "1rem 0",
    "& .container": {
      flexDirection: "column !important",
      "& a": { margin: "0 0 16px !important" },
    },
  },
}));

const FooterContent = styled("div")(() => ({
  width: "100%",
  display: "flex",
  margin: "0 auto",
  maxWidth: "1170px",
  padding: "0px 1rem",
  alignItems: "center",
}));

const Footer = () => {
  const theme = useTheme();
  const { settings } = useSettings();

  const footerTheme = settings.themes[settings.footer.theme] || theme;

  return (
    <ThemeProvider theme={footerTheme}>
      <AppBar color="primary" position="static" sx={{ zIndex: 96 }}>
        <AppFooter>
          <FooterContent>
            <Button variant="contained" color="secondary">
              Get Admin Pro
            </Button>
            <Span sx={{ m: "auto" }}></Span>
            <Paragraph sx={{ m: 0 }}>
              Design and Developed by <a href="http://ui-lib.com">UI Lib</a>
            </Paragraph>
          </FooterContent>
        </AppFooter>
      </AppBar>
    </ThemeProvider>
  );
};

export default Footer;
