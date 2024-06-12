import {
  Box,
  Hidden,
  Icon,
  IconButton,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { AdminSidenav } from "app/components";
import React, { useEffect, useState } from "react";
import UserProfileContent from "./UserProfileContent";
import UserProfileSidenav from "./UserProfileSidenav";
import AdminSidenavContainer from "app/components/AdminSidenav/AdminSidenavContainer";
import AdminSidenavContent from "app/components/AdminSidenav/AdminSidenavContent";

const ProfileRoot = styled("div")(({ theme }) => ({
  position: "relative",
  "& .headerBG": {
    height: 345,
    background: theme.palette.primary.main,
    "@media only screen and (max-width: 959px)": {
      height: 400,
    },
  },
}));

const UserProfile = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const toggleSidenav = () => {
    setOpen(!open);
  };
  useEffect(() => {
    if (isMobile) setOpen(false);
    else setOpen(true);
  }, [isMobile]);

  return (
    <ProfileRoot>
      <AdminSidenavContainer>
        <AdminSidenav width="300px" open={open} toggleSidenav={toggleSidenav}>
          <Box textAlign="right" className="headerBG">
            <Hidden smUp>
              <IconButton onClick={toggleSidenav}>
                <Icon sx={{ color: "#fff" }}>clear</Icon>
              </IconButton>
            </Hidden>
          </Box>

          <UserProfileSidenav />
        </AdminSidenav>

        <AdminSidenavContent open={open}>
          <Box className="headerBG" />
          <UserProfileContent toggleSidenav={toggleSidenav} />
        </AdminSidenavContent>
      </AdminSidenavContainer>
    </ProfileRoot>
  );
};

export default UserProfile;
