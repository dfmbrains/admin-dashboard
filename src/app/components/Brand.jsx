import { Box, styled } from "@mui/system";
import useSettings from "app/hooks/useSettings";
import React from "react";
import { FlexBetween } from "./FlexBox";
import AdminLogo from "app/components/AdminLogo";
import { Span } from "./Typography";

const BrandRoot = styled(FlexBetween)(() => ({
  padding: "20px 18px 20px 29px",
}));

const StyledSpan = styled(Span)(({ mode }) => ({
  fontSize: 18,
  display: mode === "compact" ? "none" : "block",
}));

const Brand = ({ children }) => {
  const { settings } = useSettings();
  const leftSidebar = settings.layout1Settings.leftSidebar;
  const { mode } = leftSidebar;

  return (
    <BrandRoot>
      <Box gap={1} display="flex" alignItems="center">
        <AdminLogo />

        <StyledSpan mode={mode} className="sidenavHoverShow">
          Admin
        </StyledSpan>
      </Box>

      <Box
        className="sidenavHoverShow"
        sx={{ display: mode === "compact" ? "none" : "block" }}
      >
        {children || null}
      </Box>
    </BrandRoot>
  );
};

export default Brand;
