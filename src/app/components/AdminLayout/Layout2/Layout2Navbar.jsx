import { Box, styled } from "@mui/system";
import AdminHorizontalNav from "app/components/AdminHorizontalNav";
import React from "react";
import { navigations } from "app/navigations";

const NavbarRoot = styled("div")(({ theme }) => ({
  "&, & .horizontal-nav ul ul": {
    zIndex: 1,
    background: theme.palette.primary.main,
  },
  "& .horizontal-nav a, & .horizontal-nav label": {
    color: theme.palette.text.primary,
  },
  "& .horizontal-nav ul li ul li:hover, & .horizontal-nav ul li ul li.open": {
    background: theme.palette.primary.dark,
  },
}));

const Layout2Navbar = () => {
  return (
    <NavbarRoot className="navbar">
      <Box pl={3}>
        <AdminHorizontalNav navigation={navigations} max={6} />
      </Box>
    </NavbarRoot>
  );
};

export default Layout2Navbar;
